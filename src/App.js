import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Tasks from "./Component/Tasks";
import AddTask from "./Component/AddTask";
import { useState } from "react";
import "firebase/firestore";
import { useFirestoreCollectionData, useFirestore } from "reactfire";

function App() {
  const smoothies = useFirestore().collection("smoothies");
  const { status, data } = useFirestoreCollectionData(smoothies);
  const [showAddTask, setShowAddTask] = useState(false);
  const addTask = (task) => {
    smoothies.add(task);
  };
  const deleteTask = (id) => {
    smoothies.doc(id).delete();
  };

  return status === "loading" ? (
    <div></div>
  ) : (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask ? (
                <AddTask onAdd={addTask} />
              ) : (
                <Tasks data={data} onDelete={deleteTask} />
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
