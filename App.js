import React from 'react';
import { TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Task from './components/Tasks';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      {/* Heading */}

      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}>Today's Tasks To Do</Text>
        <View style={styles.items}>
          {/* Task List */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={ () => completeTask() }> 
                  <Task  text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {/* Add Tasks */}
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"}
        style = {styles.writeTask}
      >
        <TextInput style={styles.input} placeholder={'Add Task..'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addTask}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTask:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    width: 300,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper:{
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addTask:{},
  
});
