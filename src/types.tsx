export interface ComponentProps {
   componentId: string,
   rootTag: number
}

export interface PostType {
   id: string | number[],
   title: string,
   text: string,
   image: string
}

export interface PostProps {
   key: string | number[],
   post: PostType,
   componentId: string,
}

export interface PostScreenType {
   componentId: string,
   rootTag: number,
   text: string,
   image: string,
}