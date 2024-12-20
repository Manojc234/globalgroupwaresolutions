import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toastify
import 'react-toastify/dist/ReactToastify.css';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch users.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete user.");
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${editingUser.id}`, editingUser);
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...editingUser } : user
        )
      );
      setEditingUser(null);
      toast.success("User updated successfully!");
    } catch (error) {
      toast.error("Failed to update user.");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(search.toLowerCase()) ||
      user.last_name.toLowerCase().includes(search.toLowerCase())
  );
  const navigateToHome = () => {
    navigate("/homepage");  // Navigates back to the homepage
  };

  return (
    <div className="acontainer">
      <button className="btn btn-primary back-btn" onClick={navigateToHome}>
        Back
      </button>
      <h1 className="mt-5"></h1>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredUsers.map((user) => (
          <div key={user.id} className="col-md-4">
            <div className="ucard my-3">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="ucard-img-top"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div className="ucard-body">
                {editingUser && editingUser.id === user.id ? (
                  <form onSubmit={updateUser}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={editingUser.first_name}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, first_name: e.target.value })
                      }
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={editingUser.last_name}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, last_name: e.target.value })
                      }
                      placeholder="Last Name"
                    />
                    <input
                      type="email"
                      className="form-control mb-2"
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, email: e.target.value })
                      }
                      placeholder="Email"
                    />
                    <button className="btn btn-success mt-2" type="submit">
                      Update
                    </button>
                    <button
                      className="btn btn-secondary mt-2 mx-2"
                      type="button"
                      onClick={() => setEditingUser(null)}
                    >
                    Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <h5 className="ucard-title">{user.first_name} {user.last_name}</h5>
                    <p className="ucard-text">{user.email}</p>
                    <button
                      className="btn btn-warning btn-sm mx-1"
                      onClick={() => setEditingUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className="btn btn-primary"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setPage((p) => p + 1)}
          disabled={filteredUsers.length === 0}
        >
          Next
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
