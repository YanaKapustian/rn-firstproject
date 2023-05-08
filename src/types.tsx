export interface ComponentProps {
   componentId: string,
   rootTag: number
}

export interface PostType {
   id: string,
   title: string,
   text: string,
   image: string
}

export interface PostProps {
   key: string,
   post: PostType,
   componentId: string,
}

export interface PostScreenType {
   componentId: string,
   rootTag: number,
   text: string,
   image: string,
}

export interface FetchedDataType {
   id: string;
   userId: string;
   body: string;
   title: string;
}