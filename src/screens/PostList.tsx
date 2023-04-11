import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PostItem from '../components/PostItem';
import { ComponentProps, PostType } from '../types';
import uuid from 'react-native-uuid';

const PostList = (props: ComponentProps) => {

   const posts: PostType[] = [
      {
         id: uuid.v4(),
         title: "Post 1",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto repellat qui consequatur totam unde fuga doloribus! Eum adipisci reiciendis ipsa pariatur quibusdam quod quos delectus necessitatibus repellat voluptas? Adipisci?",
         image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
      },
      {
         id: uuid.v4(),
         title: "Post 2",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad?",
         image: "https://images.unsplash.com/photo-1678827843845-d9d6d5b80f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
         id: uuid.v4(),
         title: "Post 3",
         text: "Lorem ipsum dolor sit amet consectetur.",
         image: "https://images.unsplash.com/photo-1679944520044-3810b7c10daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
   ]

   return (
      <SafeAreaView style={{flex: 1}}>
         <ScrollView>
            {posts.map(post => <PostItem key={post.id} post={post} componentId={props.componentId} />)}
         </ScrollView>
      </SafeAreaView>
   );
}
 
export default PostList;