import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FormLayout from './ui/FormLayout';
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
import Plans from './pages/Plans';
import PersonalInfo from './pages/PersonalInfo';
import PageNotFound from './pages/PageNotFound';
import Appreciation from './pages/Appreciation';
import { FormProvider } from './context/FormContext';

const App = () => {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<FormLayout />}>
            <Route
              index
              element={<Navigate to="/form/personal-info" replace />}
            />
            <Route path="form/personal-info" element={<PersonalInfo />} />
            <Route path="form/summary" element={<Summary />} />
            <Route path="form/addons" element={<AddOns />} />
            <Route path="form/plans" element={<Plans />} />
            <Route
              path="/form/summary/appreciation"
              element={<Appreciation />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
};

export default App;
