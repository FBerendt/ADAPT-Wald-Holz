import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

import Blocks from "./Components/blocks/Blocks";
import Root from "./Root";
import Projektidee from "./Components/Pages/Projektidee";
import Module from "./Components/Pages/Module/Module";
import Waldmanagement from "./Components/Pages/Waldmanagement";
import Holzbereitstellung from "./Components/Pages/Holzbereitstellung";
import Holzverwendung from "./Components/Pages/Holzverwendung";
import InnoForum from "./Components/Pages/InnoForum";
import Projektkonsortium from "./Components/Pages/Projektkonsortium";
import Regulus from "./Components/Pages/Regulus";
import Imprint from "./Components/Pages/Imprint/Imprint";
// import PopupPoll from "./Components/blocks/PopupPoll";
import Team from "./Components/Pages/Team/Team";
import Datenschutz from "./Components/Pages/Datenschutz";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      // children: [
      //   { path: "/", element: <Blocks /> },
      //   { path: "/projektidee", element: <Projektidee /> },
      //   { path: "/module", element: <Module /> },
      //   { path: "/waldmanagement", element: <Waldmanagement /> },
      //   { path: "/holzbereitstellung", element: <Holzbereitstellung /> },
      //   { path: "/holzverwendung", element: <Holzverwendung /> },
      //   { path: "/innoForum", element: <InnoForum /> },
      //   { path: "/projektkonsortium", element: <Projektkonsortium /> },
      //   { path: "/regulus", element: <Regulus /> },
      //   { path: "/imprint", element: <Imprint /> },
      //   { path: "/team", element: <Team /> },
      //   { path: "/datenschutz", element: <Datenschutz /> },
      // ],
    },
  ],
  {
    basename: "/ADAPT-Wald-Holz",
  }
);

function App() {
  return (
    <>
      {/* <PopupPoll /> */}
      <Box
        sx={{
          display: "flex",
          height: "full",
          width: "full",
          justifyContent: "center",
          bgcolor: "#ededed",
        }}
      >
        <div className="flex h-full max-w-[1920px] bg-white">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </Box>
    </>
  );
}

export default App;
