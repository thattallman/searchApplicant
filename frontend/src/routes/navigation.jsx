import  { lazy, Suspense } from "react";
import PageLoader from "../components/micros/PageLoader";
const ApplicantSearch = lazy(() => import("../pages/ApplicantSearch"));
export const nav = [
    {
        path: "/",
        name: "applicant",
        element: (
            <Suspense fallback={<PageLoader/>}>
            <ApplicantSearch />
            </Suspense>
        ),
        isPrivate: false,
      }

]