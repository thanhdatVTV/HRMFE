import React, { useState } from "react";
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import './Registerleave.css';
const LeaveRegistration = () => {
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="leave-management">
      <h2>QUẢN LÝ NGHỈ</h2>
      <div className="table-container">
        <table className="leave-table">
          <thead>
            <tr>
              <th>Trạng thái</th>
              <th>Mã NV</th>
              <th>Tên nhân viên</th>
              <th>Chức danh</th>
              <th>Phòng ban</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  Không có dữ liệu
                </td>
              </tr>
            ) : (
              data
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item.employeeId}</td>
                    <td>{item.employeeName}</td>
                    <td>{item.position}</td>
                    <td>{item.department}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="pagination-controls">
          <label>
            Hiển thị
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </label>
          <span>
            {` ${data.length} kết quả`}
          </span>
        </div>
        <div className="pagination-buttons">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            &laquo;
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveRegistration;
