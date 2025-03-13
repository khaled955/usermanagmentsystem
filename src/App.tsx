import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import AllUsers from "./Components/AllUsers/AllUsers"
import AuthLayout from "./Components/AuthLayout/AuthLayout"
import Login from "./Pages/Login/Login"
import NotFound from "./Pages/NotFound/NotFound"
import { Toaster } from "react-hot-toast"
import UserProvider from "./Context/Token.context"
import UserDetails from "./Components/UserDetails/UserDetails"
import AddUsers from "./Components/addusers/AddUsers"
import UpdateUsers from "./Components/updateusers/UpdateUsers"
import ModalProvider from "./Context/Modal.context"
import UpdatDataForm from "./Components/UpdateDataForm/UpdateDataForm"
import UsersSearchProvider from "./Context/UsersSearch.context"
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"
// ts particles
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 

function App() {


const routes = createBrowserRouter([{path:"dashboard",element: <ProtectedRoute> <Layout/></ProtectedRoute> ,children:[
  {index:true ,element:<AllUsers/>},
  {path:"home" ,element:<AllUsers/>},
  {path:"userdetails/:userid" ,element:<UserDetails/>},
  {path:"adduser" ,element:<AddUsers/>},
  {path:"updateuser" ,element:<UpdateUsers/>},
  ]} ,


{path:"/" , element:<AuthLayout/> , children:[
  {index:true, element:<Login/>},
  {path:"login" , element:<Login/>},
]},
{path:"*" , element:<NotFound/>},
{path:"updatdata" , element:<UpdatDataForm/>},

])
// ts paricles start
const particlesInit = useCallback(async (engine: Engine) => {
  console.log(engine);


  await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
   console.log(container);
}, []);
// ts particles end

  return (
    <>
     <UserProvider>
      <ModalProvider>
        <UsersSearchProvider>
<RouterProvider router={routes}/>
</UsersSearchProvider>
</ModalProvider>
</UserProvider>


<Toaster
  toastOptions={{
    success: {
      style: {
        background: 'green',
        color: '#fff',
      },
    },
    error: {
      style: {
        background: 'red',
      },
    },
    loading:{
      style:{
        backgroundColor:"red",
        color:"white"
      }
    }
  }}
/>
<div className="absolute -z-[1]">
<Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
</div>


    </>
  )
}

export default App
