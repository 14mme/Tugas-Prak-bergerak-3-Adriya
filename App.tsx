import React, { useState } from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  Image, 
  Button, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    setText('');
    setTodos([{ id: todos.length, text }, ...todos]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.Center}>
          <Text style={styles.title}>aowkwokwoakowkokwkoakwkk</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.Center}>
          <Image
            style={styles.image}
            source={{ uri: 'https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com/1666065647668-image%20(10).png.webp' }}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="ketik disini ya kont*******"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTodo}
        >
          <Text style={styles.buttonText}>Crrrrrrrrttt</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.todoItem}>
                <Text style={styles.item}>{item.text}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteTodo(item.id)}
                >
                  <Text style={styles.deleteButtonText}>Ini Hapus</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  item: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
