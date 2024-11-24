import React, { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import "./Registerleave.css";

const LeaveRegistration = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fake data for demonstration purposes
    const fakeData = [
      {
        employeeId: "E001",
        employeeName: "Nguyen Van A",
        position: "Developer",
        department: "IT",
        startDate: "2023-01-01",
        endDate: "2023-01-10",
      },
      {
        employeeId: "E002",
        employeeName: "Tran Thi B",
        position: "Designer",
        department: "Design",
        startDate: "2023-02-01",
        endDate: "2023-02-05",
      },
      // Add more fake data as needed
    ];
    setData(fakeData);
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="leave-management">
      <div class="toolbar">
  <div class="toolbar-title">
    QUẢN LÝ NGHỈ
  </div>
  <div class="toolbar-icons">
  <button>
      <i class="fas fa-plus"></i> Thêm mới
    </button>
    <button>
      <i class="fas fa-edit"></i> Sửa
    </button>
    <button>
      <i class="fas fa-trash-alt"></i> Xóa
    </button>
    <button>
      <i class="fas fa-search"></i> Tìm kiếm
    </button>
  </div>
</div>


     

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
            Hiển thị &nbsp;
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </label>
          <span>{` ${data.length} kết quả`}</span>
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
