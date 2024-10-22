import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const People = () => {
  const [image, setImage] = useState(''); // State to manage the image URI
  const [caption, setCaption] = useState(''); // State to manage the caption
  const [posts, setPosts] = useState([]); // State to manage posts

  // Function to handle opening the image picker
  const handleImagePicker = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = response.assets[0].uri; // Get the image URI from the response
        setImage(source); // Set the selected image URI
      }
    });
  };

  // Function to handle posting the image and caption
  const handlePost = () => {
    if (image && caption) {
      setPosts([{ id: Date.now().toString(), image, caption, comments: [], likes: 0 }, ...posts]);
      setImage(''); // Clear the image input
      setCaption(''); // Clear the caption input
    } else {
      Alert.alert('Error', 'Please provide both an image and a caption.');
    }
  };

  // Function to handle adding comments to a post
  const handleComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  // Function to handle liking a post
  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Function to render each post
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>

      {/* Display comments */}
      <View style={styles.commentsContainer}>
        {item.comments.map((comment, index) => (
          <Text key={index} style={styles.commentText}>
            {comment}
          </Text>
        ))}
      </View>

      {/* Comment Input */}
      <TextInput
        style={styles.commentInput}
        placeholder="Add a comment..."
        onSubmitEditing={(event) => handleComment(item.id, event.nativeEvent.text)}
      />

      {/* Like Button with Likes Count */}
      <TouchableOpacity style={styles.reactionButton} onPress={() => handleLike(item.id)}>
        <Icon name="thumbs-up-outline" size={20} color="#888" />
        <Text style={styles.reactionText}>Like ({item.likes})</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>I Was Here</Text>

      {/* Input Section for Image and Caption */}
      <View style={styles.inputContainer}>
        {/* Button to open the image picker */}
        <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
          <Text style={styles.imagePickerText}>
            {image ? 'Change Photo' : 'Select a Photo'}
          </Text>
        </TouchableOpacity>

        {/* Display selected image */}
        {image ? <Image source={{ uri: image }} style={styles.selectedImage} /> : null}

        {/* Input for caption */}
        <TextInput
          style={styles.input}
          placeholder="Caption"
          value={caption}
          onChangeText={setCaption}
        />
        
        {/* Button to post the image and caption */}
        <TouchableOpacity onPress={handlePost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* List of Posts */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  imagePickerButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePickerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  postButton: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  postCaption: {
    fontSize: 16,
    marginBottom: 10,
  },
  commentsContainer: {
    marginBottom: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  reactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionText: {
    marginLeft: 5,
  },
  commentText: {
    fontStyle: 'italic',
    color: '#555',
  },
});

export default People;
