import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { ToastProvider } from './context/ToastContext';

// Layouts
import { PublicLayout } from './components/layout/PublicLayout';
import { AdminLayout } from './components/layout/AdminLayout';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { SkillsPage } from './pages/public/SkillsPage';
import { ProjectsPage } from './pages/public/ProjectsPage';
import { ProjectDetailPage } from './pages/public/ProjectDetailPage';
import { ExperiencePage } from './pages/public/ExperiencePage';
import { CertificatesPage } from './pages/public/CertificatesPage';
import { ContactPage } from './pages/public/ContactPage';
import { ResumePage } from './pages/public/ResumePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Admin Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminProjectsPage } from './pages/admin/AdminProjectsPage';
import { AdminSkillsPage } from './pages/admin/AdminSkillsPage';
import { AdminExperiencePage } from './pages/admin/AdminExperiencePage';
import { AdminCertificatesPage } from './pages/admin/AdminCertificatesPage';
import { AdminMessagesPage } from './pages/admin/AdminMessagesPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';

export function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <DataProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                {/* Public Routes */}
                <Route element={<PublicLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/skills" element={<SkillsPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/certificates" element={<CertificatesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                </Route>

                {/* Admin Auth Route */}
                <Route path="/admin/login" element={<AdminLoginPage />} />

                {/* Admin Protected CMS Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="dashboard" element={<AdminDashboardPage />} />
                  <Route path="projects" element={<AdminProjectsPage />} />
                  <Route path="skills" element={<AdminSkillsPage />} />
                  <Route path="experience" element={<AdminExperiencePage />} />
                  <Route path="certificates" element={<AdminCertificatesPage />} />
                  <Route path="messages" element={<AdminMessagesPage />} />
                  <Route path="settings" element={<AdminSettingsPage />} />
                </Route>

                {/* Catch-all 404 */}
                <Route element={<PublicLayout />}>
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </DataProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
