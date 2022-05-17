import React, { useMemo } from "react";
import { View, Text } from "react-native";

import { Friend } from "./Friend";

interface Props {
  data: {
    id: number;
    name: string;
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

      {data.map((friend) => (
        <Friend key={friend.id} data={friend} handleFollow={handleFollow} />
      ))}
    </View>
  );
}
