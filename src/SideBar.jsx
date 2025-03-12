import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Routes, Route } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AddStudent } from "./components/pages/student/add-student";
import { SubjectTable } from "./components/pages/student/subject/Subject";
import AddBook from "./components/pages/library/add-book";
import { AdmitMain } from "./components/pages/student/admit/admit-main";
import { AllStudent } from "./components/pages/student/all-student";
import { ResultMain } from "./components/pages/student/result/add-result";
import { AllRequest } from "./components/pages/finance/allrequest";

export default function SideBar() {
  return (
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
        <SidebarTrigger />
          <Separator />
          <div>
          <Routes>
            <Route path="addStudent" element={<AddStudent />} />
            <Route path="addSubject" element={<SubjectTable />} />
            <Route path="showBook" element={<AddBook />} />
            <Route path="admit" element={<AdmitMain />} />
            <Route path="allStudents" element={<AllStudent />} />
            <Route path="result" element={<ResultMain />} />
            <Route path="allrequest" element={<AllRequest />} />
          </Routes>
          </div>
        </SidebarInset>
    </SidebarProvider>
  );
}