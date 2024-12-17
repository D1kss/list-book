import React, { useState } from "react";

function App() {
  // 1. Variable: State untuk daftar tugas
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // 4. Function untuk menambahkan tugas
  const addTask = () => {
    if (input.trim() === "") {
      alert("Tugas tidak boleh kosong!");
      return;
    }
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  // Function untuk menghapus tugas
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function untuk menyelesaikan tugas
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 To-Do List Interaktif</h1>

      {/* 5. Input */}
      <div>
        <input
          type="text"
          placeholder="Tambahkan tugas baru..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", marginRight: "5px" }}
        />
        <button onClick={addTask}>Tambah</button>
      </div>

      {/* 2. Kondisi: Menampilkan pesan jika daftar kosong */}
      {tasks.length === 0 ? (
        <p style={{ marginTop: "20px" }}>Tidak ada tugas! 🎉</p>
      ) : (
        <ul style={{ listStyle: "none", padding: "0", marginTop: "20px" }}>
          {/* 3. Perulangan: Menampilkan daftar tugas */}
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                margin: "10px 0",
              }}
            >
              {task.text}{" "}
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Belum Selesai" : "Selesai"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={{ marginLeft: "5px" }}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* 2. Kondisi: Switch-case untuk status tugas */}
      <div>
        <h3>Status Tugas:</h3>
        {tasks.length > 0 ? (
          tasks.every((task) => task.completed) ? (
            <p>Semua tugas telah selesai! ✅</p>
          ) : (
            <p>Ada tugas yang belum selesai! 🔄</p>
          )
        ) : (
          <p>Tugas belum ditambahkan! 🕗</p>
        )}
      </div>
    </div>
  );
}

export default App;
