import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";

import { Friend } from "./Friend";

interface Props {
  data: {
    id: number;
    name: string;
    online: string;
    likes: number;
  }[];
  handleFollow: () => void;
}

export function FriendList({ data, handleFollow }: Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => likes + friend.likes, 0);
  }, [data]);

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Friend data={item} handleFollow={handleFollow} />
        )}
      />
    </View>
  );
}
