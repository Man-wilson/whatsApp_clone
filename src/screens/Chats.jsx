import { ScrollView, StyleSheet, Text, View, Image, onPress, Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChatScreen } from '../components/Layout/ChatScreen';
const chats = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWqIiikhssOvMT0MdrZ3MSDLq8Rzg_39C7pHNotiOyyoSI_DUrSLXUBCvsmtPkxmEQnM&usqp=CAU',
    name: "Unstoppable",
    text: "Hey Guys how was your night?? so today we have a pitch on the other upcoming system"
  },  
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vOZUQR8GW_mnnpm-EfhVDf1zdg-IaxoZng&usqp=CAU://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHsyXC9gZ-Ka4tuJ_ZkLOX2ZFt9H2QeAPmlbt-aWKuZQX940rtT7p8EYFlRKih_NfqAU&usqp=CAU',
    name: "MKU billiard team",
    text: "Wassup boys i hope everyone knows that tommorow we will have practice at 3:00pm"
  },
  {
    image: 'https://play-lh.googleusercontent.com/JZLQjEK7vKSzJ9PX1kVqgWOT0-FrUiWSQmsQl9XtmShNyxDDLtOHCInWtnXLDA19T1c',
    name: "arsenal fans",
    text: "Hey Guys hope this weekend we will all be available for arsenal. turya show"
  },
  {
    image: 'https://thumbs.dreamstime.com/b/black-white-illustration-your-projects-monogram-letter-k-heart-crown-188612268.jpg',
    name: "k",
    text: "Wassup beautiful ngo kiri ate x ??"
  },
  {
    image: 'https://c1.wallpaperflare.com/preview/896/649/125/africa-poverty-child-village.jpg',
    name: "bico",
    text: "Bro how was your interview, hope you fucked it up hhhhhhhhhhh"
  },
  {
    image: 'https://www.newtimes.co.rw/uploads/imported_images/files/intore.jpg',
    name: "Razaack",
    text: "Heii,,, please try to make it today.."
  },
  {
    image: 'https://play-lh.googleusercontent.com/JZLQjEK7vKSzJ9PX1kVqgWOT0-FrUiWSQmsQl9XtmShNyxDDLtOHCInWtnXLDA19T1c',
    name: "arsenal fans",
    text: "Hey Guys hope this weekend we will all be available for arsenal. turya show"
  },
  {
    image: 'https://play-lh.googleusercontent.com/JZLQjEK7vKSzJ9PX1kVqgWOT0-FrUiWSQmsQl9XtmShNyxDDLtOHCInWtnXLDA19T1c',
    name: "arsenal fans",
    text: "Hey Guys hope this weekend we will all be available for arsenal. turya show"
  },
  {
    image: 'https://play-lh.googleusercontent.com/JZLQjEK7vKSzJ9PX1kVqgWOT0-FrUiWSQmsQl9XtmShNyxDDLtOHCInWtnXLDA19T1c',
    name: "arsenal fans",
    text: "Hey Guys hope this weekend we will all be available for arsenal. turya show"
  },
  {
    image: 'https://play-lh.googleusercontent.com/JZLQjEK7vKSzJ9PX1kVqgWOT0-FrUiWSQmsQl9XtmShNyxDDLtOHCInWtnXLDA19T1c',
    name: "arsenal fans",
    text: "Hey Guys hope this weekend we will all be available for arsenal. turya show"
  },
  {
    image: 'https://play-lh.googleusercontent.com/JZLQjEK7vKSzJ9PX1kVqgWOT0-FrUiWSQmsQl9XtmShNyxDDLtOHCInWtnXLDA19T1c',
    name: "arsenal fans",
    text: "Hey Guys hope this weekend we will all be available for arsenal. turya show"
  },
]

export const Chat = ({navigation}) => {

  
  return (
    // <SafeAreaView>
    <ScrollView>
      <Pressable onPress={() => navigation.navigate('chatscreen', {userId: '123', name: 'John Doe', avatar: 'https://placeimg.com/140/140/any'})} >
        <View style={styles.container}>
          {
            chats.map((chat, key)=>{
              return(
                <ChatItem 
                key={key} 
                name={chat.name} 
                image={chat.image} 
                text={chat.text} />
              )
            })
          }
        </View>
        </Pressable>
      </ScrollView>
    /* </SafeAreaView> */
    
    )
}

const ChatItem = ({name, image, text}) => {
  const max_length = 60 
  return (
    <View style={styles.containerStyle}>
            <Image
            style={styles.images}
            source={{uri: image}}
            />
             <View style={styles.Firsttext}>
              <Text style={styles.ChatHeader}>{name}</Text>
              <Text numberOfLines={1} 
               style={styles.ChatText} >
                {((text).length > max_length ) ? 
                (((text).substring(0, max_length-3)) + '...') : (text) }
                </Text>
             </View>
          </View>
  )
}


const styles = StyleSheet.create({
  images : {
    borderRadius: 50,
    height: 50,
    width: 50,  
    
  },

  container : {
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  containerStyle : {
    paddingVertical: 12,
    flexDirection: 'row',
  },

  Firsttext: {
    flexDirection: 'column',
    marginHorizontal: 10,
    paddingVertical: 6,
  },

  ChatHeader : {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase'
  },
  
  ChatText : {
    fontSize: 12,
    fontWeight: '300',
  }

})