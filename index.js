import { Navigation } from "react-native-navigation";
import AddPostBtn from "./src/components/AddPostBtn";
import DismissModal from "./src/components/DismissModal";
import SavePost from "./src/components/SavePost";
import AddPost from "./src/screens/AddPost";
import PostList from "./src/screens/PostList";
import PostScreen from "./src/screens/PostScreen";

Navigation.registerComponent('PostList', () => PostList);
Navigation.registerComponent('PostScreen', () => PostScreen);
Navigation.registerComponent('AddPostBtn', () => AddPostBtn)
Navigation.registerComponent('DismissModal', () => DismissModal)
Navigation.registerComponent('SavePost', () => SavePost)
Navigation.registerComponent('AddPost', () => AddPost)

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'PostList'
             },
           }
         ]
       }
     }
  });
});

PostList.options = {
  topBar: {
    title: {
      text: "Blog",
      fontSize: 22,
      alignment: 'center'
    },
    rightButtons: [
      {
        component: {
          name: 'AddPostBtn'
        }
      },
    ]
  },
}

AddPost.options = {
  topBar: {
    title: {
      text: "Add post",
      fontSize: 22,
      alignment: 'center'
    },
    leftButtons: [
      {
        component: {
          name: 'DismissModal'
        }
      }
    ],
    rightButtons: [
      {
        component: {
          name: 'SavePost'
        }
      }
    ]
  }
}

PostScreen.options = {
  topBar: {
     title: {
        fontSize: 22,
        alignment: 'center'
     }
  }
}
