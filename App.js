import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList((prev) => [...prev, task]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTaskList(    taskList.filter((task, tid) => {
      return id!==tid
    }))

  }

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.dataEntryContainer}>
        <TextInput
          value={task}
          onChangeText={(text) => setTask(text)}
          style={styles.inputField}
          placeholder="Enter your task"
        />
        <Pressable onPress={addTask} style={styles.addButtonContainer}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>

      <View style={styles.tasksView}>
        {taskList.map((task, id) => {
          return (
            <View key={id} style={styles.taskDisplayContainer}>
              <Text style={styles.taskDisplayText}>{task}</Text>

              <Pressable onPress={() => deleteTask(id)} style={styles.deleteButtonContainer}>
                <Text style={styles.deleteButtonText}>del</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  dataEntryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: 300,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  addButtonContainer: {
    backgroundColor: "dodgerblue",
    padding: 12,
  },
  addButtonText: {
    color: "white",
  },
  tasksView: {
    marginTop: 20,
    width: 331,
  },
  taskDisplayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  taskDisplayText: {},
  deleteButtonContainer: {
    backgroundColor: "tomato",
    padding: 10,
  },
  deleteButtonText: {
    color: "white",
  },
});

export default App;
