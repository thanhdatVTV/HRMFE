import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import LoginNew from '../../components/Login/Login';
import Users from '../../components/ManageUsers/Users';
import Home from '../../components/Home/Home';
import PrivateRoutes from './PrivateRoutes';
import UploadFile from '../UploadFile/UploadFile';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Category from '../Category/Category';
import PurchasePage from '../../components/PurchasePage/PurchasePage';
import TableUsers from '../TableUsers';
import Feature from '../Feature/Feature';
import TableLecturers from '../../components/Lecturers/TableLecturers';
import TableFaculty from '../../components/Faculty/TableFaculty';
import TableBuilding from '../../components/Building/TableBuilding';
import TableMajor from '../../components/Major/TableMajor';
import TableNhomLop from '../../components/NhomLop/TableNhomLop';
import TableSemester from '../../components/Semester/TableSemester';
import TableYear from '../../components/Year/TableYear';
import TableTestSchedules from '../TestSchedules/TableTestSchedules';
import TableSubjects from '../Subjects/TableSubjects';
import TableSubjectGroups from '../SubjectGroups/TableSubjectGroups';
import TableCoSo from '../CoSo/TableCoSo';
import TableEduProgram from '../EducationProgram/TableEduProgram';
import TableRoom from '../Room/TableRoom';
import Profile from '../Profile/Profile';
import TableDotDangKy from '../DotDangKy/TableDotDangKy';
import TablePhanCongMonHoc from '../PhanCongMonHoc/TablePhanCongMonHoc';
import TableDotDangKySinhVien from '../DangKyMonHoc/TableDotDangKySinhVien';
import TableDangKyMonHoc from '../DangKyMonHoc/TableDangKyMonHoc';
import EduProgram from '../User/EduProgram';
import ThoiKhoaBieu from '../User/ThoiKhoaBieu';
import MyCourse from '../User/MyCourse';
import ViewCourse from '../User/ViewCourse';

const AppRoutes = () => {
  const { user } = useContext(UserContext);
  console.log('App rou', user);

  const navigate = useNavigate();
  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaa');
    let session = sessionStorage.getItem('account');
    if (!session) {
      navigate('/Login');
    }
    // if (user.isAuthenticated === false) {
    //     console.log('bbbbbbbbbbbbbb');
    //     navigate("/Login")
    // }
  }, []);

  const onFileChange = (files) => {
    console.log(files);
  };

  if (user && user.isAuthenticated === true) {
    return (
      <>
        {/* <PrivateRoutes path="/users" element={Users} /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" element={<TableUsers />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/Login" element={<LoginNew />} />

          <Route path="/users" element={<Users />} />
          <Route
            path="/upload"
            element={<UploadFile onFileChange={(files) => onFileChange(files)} />}
          />
          <Route path="/category" element={<Category />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/lecturers" element={<TableLecturers />} />
          <Route path="/faculty" element={<TableFaculty />} />
          <Route path="/building" element={<TableBuilding />} />
          <Route path="/major" element={<TableMajor />} />
          <Route path="/nhomlop" element={<TableNhomLop />} />
          <Route path="/semester" element={<TableSemester />} />
          <Route path="/year" element={<TableYear />} />
          <Route path="/testschedules" element={<TableTestSchedules />} />
          <Route path="/subjects" element={<TableSubjects />} />
          <Route path="/subjectgroups" element={<TableSubjectGroups />} />
          <Route path="/coso" element={<TableCoSo />} />
          <Route path="/eduprogram" element={<TableEduProgram />} />
          <Route path="/user/eduprogram" element={<EduProgram />} />
          <Route path="/user/thoikhoabieu" element={<ThoiKhoaBieu />} />
          <Route path="/user/mycourse" element={<MyCourse />} />
          <Route path="/user/view-course/:id" element={<ViewCourse />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/room" element={<TableRoom />} />
          <Route path="/dotdangky" element={<TableDotDangKy />} />
          <Route path="/phancongmonhoc/:MaDDK" element={<TablePhanCongMonHoc />} />
          <Route path="/dotdangkysinhvien" element={<TableDotDangKySinhVien />} />
          <Route path="/dangkymonhoc/:MaDDK" element={<TableDangKyMonHoc />} />

        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" element={<LoginNew />} />
        </Routes>
      </>
    );
  }
};

export default AppRoutes;
