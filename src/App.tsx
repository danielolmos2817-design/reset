import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { ToastProvider } from './components/ui/Toast';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

// Public Pages
import { Landing } from './pages/Landing';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BlogSingle } from './pages/BlogSingle';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { NotFound } from './pages/NotFound';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { UserManagement } from './pages/admin/UserManagement';
import { ExamManagement } from './pages/admin/ExamManagement';
import { ExamQuestions } from './pages/admin/ExamQuestions';
import { CreateExam } from './pages/admin/CreateExam';
import { ResultsPublishing } from './pages/admin/ResultsPublishing';
import { VoucherManagement } from './pages/admin/VoucherManagement';
import { FinanceDashboard } from './pages/admin/FinanceDashboard';
import { FinanceOversight } from './pages/admin/FinanceOversight';
import { CampFiles } from './pages/admin/CampFiles';
import { Settings } from './pages/admin/Settings';
import { SystemSettings } from './pages/admin/SystemSettings';
import { BlogManagement } from './pages/admin/BlogManagement';
import { CreateBlogPost } from './pages/admin/CreateBlogPost';
import { EditBlogPost } from './pages/admin/EditBlogPost';
import { GalleryManagement } from './pages/admin/GalleryManagement';
import { NotificationsCenter } from './pages/admin/NotificationsCenter';
import { NotificationManagement } from './pages/admin/NotificationManagement';
import { ContentModeration } from './pages/admin/ContentModeration';
import { AdsManagement } from './pages/admin/AdsManagement';

// Ambassador Pages
import { AmbassadorDashboard } from './pages/ambassador/AmbassadorDashboard';
import { MyExams } from './pages/ambassador/MyExams';
import { MyResults } from './pages/ambassador/MyResults';
import { ExamSession } from './pages/ambassador/ExamSession';
import { LiveExam } from './pages/ambassador/LiveExam';
import { LiveExamEnhanced } from './pages/ambassador/LiveExamEnhanced';
import { ProfileSettings as AmbassadorProfileSettings } from './pages/ambassador/ProfileSettings';
import { SubmitExam } from './pages/ambassador/SubmitExam';

// President Pages
import { PresidentDashboard } from './pages/admin/PresidentDashboard';
import { ManageAmbassadors } from './pages/president/ManageAmbassadors';
import { ExamApprovals } from './pages/president/ExamApprovals';
import { CampRegistrations } from './pages/president/CampRegistrations';
import { PaymentsUpload } from './pages/president/PaymentsUpload';
import { Notifications as PresidentNotifications } from './pages/president/Notifications';
import { ProfileSettings as PresidentProfileSettings } from './pages/president/ProfileSettings';

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <Routes>
            {/* ==================== PUBLIC ROUTES ==================== */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogSingle />} />

            {/* ==================== ADMIN ROUTES ==================== */}
            <Route
              path="/admin/dashboard"
              element={
                <DashboardLayout role="admin">
                  <AdminDashboard />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/users"
              element={
                <DashboardLayout role="admin">
                  <UserManagement />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/exams"
              element={
                <DashboardLayout role="admin">
                  <ExamManagement />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/exams/questions/:examId"
              element={
                <DashboardLayout role="admin">
                  <ExamQuestions />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/exams/create"
              element={
                <DashboardLayout role="admin">
                  <CreateExam />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/results"
              element={
                <DashboardLayout role="admin">
                  <ResultsPublishing />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/vouchers"
              element={
                <DashboardLayout role="admin">
                  <VoucherManagement />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/finance"
              element={
                <DashboardLayout role="admin">
                  <FinanceDashboard />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/finance/oversight"
              element={
                <DashboardLayout role="admin">
                  <FinanceOversight />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/camp-files"
              element={
                <DashboardLayout role="admin">
                  <CampFiles />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <DashboardLayout role="admin">
                  <Settings />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/system-settings"
              element={
                <DashboardLayout role="admin">
                  <SystemSettings />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/blog"
              element={
                <DashboardLayout role="admin">
                  <BlogManagement />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/blog/create"
              element={
                <DashboardLayout role="admin">
                  <CreateBlogPost />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/blog/edit/:id"
              element={
                <DashboardLayout role="admin">
                  <EditBlogPost />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/gallery"
              element={
                <DashboardLayout role="admin">
                  <GalleryManagement />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/notifications"
              element={
                <DashboardLayout role="admin">
                  <NotificationsCenter />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/notifications/manage"
              element={
                <DashboardLayout role="admin">
                  <NotificationManagement />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/moderation"
              element={
                <DashboardLayout role="admin">
                  <ContentModeration />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/ads"
              element={
                <DashboardLayout role="admin">
                  <AdsManagement />
                </DashboardLayout>
              }
            />

            {/* ==================== AMBASSADOR ROUTES ==================== */}
            <Route
              path="/ambassador/dashboard"
              element={
                <DashboardLayout role="ambassador">
                  <AmbassadorDashboard />
                </DashboardLayout>
              }
            />
            <Route
              path="/ambassador/exams"
              element={
                <DashboardLayout role="ambassador">
                  <MyExams />
                </DashboardLayout>
              }
            />
            <Route
              path="/ambassador/results"
              element={
                <DashboardLayout role="ambassador">
                  <MyResults />
                </DashboardLayout>
              }
            />
            <Route
              path="/ambassador/exam/:id"
              element={
                <DashboardLayout role="ambassador">
                  <ExamSession />
                </DashboardLayout>
              }
            />
            <Route
              path="/ambassador/exam/live/:id"
              element={
                <DashboardLayout role="ambassador">
                  <LiveExam />
                </DashboardLayout>
              }
            />
            <Route
              path="/ambassador/exam/live-enhanced/:id"
              element={
                <DashboardLayout role="ambassador">
                  <LiveExamEnhanced />
                </DashboardLayout>
              }
            />
            <Route
              path="/ambassador/profile"
              element={
                <DashboardLayout role="ambassador">
                  <AmbassadorProfileSettings />
                </DashboardLayout>
              }
            />
            <Route
              path="/ambassador/exam/submit/:id"
              element={
                <DashboardLayout role="ambassador">
                  <SubmitExam />
                </DashboardLayout>
              }
            />

            {/* ==================== PRESIDENT ROUTES ==================== */}
            <Route
              path="/president/dashboard"
              element={
                <DashboardLayout role="president">
                  <PresidentDashboard />
                </DashboardLayout>
              }
            />
            <Route
              path="/president/ambassadors"
              element={
                <DashboardLayout role="president">
                  <ManageAmbassadors />
                </DashboardLayout>
              }
            />
            <Route
              path="/president/exam-approvals"
              element={
                <DashboardLayout role="president">
                  <ExamApprovals />
                </DashboardLayout>
              }
            />
            <Route
              path="/president/camp-registrations"
              element={
                <DashboardLayout role="president">
                  <CampRegistrations />
                </DashboardLayout>
              }
            />
            <Route
              path="/president/payments"
              element={
                <DashboardLayout role="president">
                  <PaymentsUpload />
                </DashboardLayout>
              }
            />
            <Route
              path="/president/notifications"
              element={
                <DashboardLayout role="president">
                  <PresidentNotifications />
                </DashboardLayout>
              }
            />
            <Route
              path="/president/profile"
              element={
                <DashboardLayout role="president">
                  <PresidentProfileSettings />
                </DashboardLayout>
              }
            />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
