import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Login from "./features/auth/login";
import Signup from "./features/auth/sign-up";
import PodcastDashboard from "./features/podcast/podcast-dashboard";
import AddPodcast from "./features/podcast/add-podcast";
import ProjectDashboard from "./features/projects/project-dashboard";
import Transcript from "./features/transcript/transcript";
import ProtectedRoute from "./components/protected-route";
import UserProfile from "./features/auth/user-profile";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/projects",
    element: (
      <ProtectedRoute>
        <ProjectDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/projects/:projectId/podcast",
    element: (
      <ProtectedRoute>
        <PodcastDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            {" "}
            <AddPodcast />
          </ProtectedRoute>
        ),
      },
      {
        path: ":podcastId/transcript",
        element: (
          <ProtectedRoute>
            <Transcript />
          </ProtectedRoute>
        ),
      },
      {
        path: "userprofile",
        element: <UserProfile />,
      },
    ],
  },

  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
