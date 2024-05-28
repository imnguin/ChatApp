import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, icons, images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { messsagesData } from "../../data";

const Chats = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(messsagesData);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = messsagesData.filter((user) =>
      user.fullName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate("Chat", { userName: item.fullName })}
      style={[
        styles.userContainer,
        index % 2 !== 0 ? styles.oldBackground : null,
      ]}
    >
      <View style={styles.userImageContainer}>
        {item.isOnline && item.isOnline == true && (
          <View style={styles.onlineIndicator} />
        )}
        <Image
          source={item.userImg}
          resizeMode="contain"
          style={styles.userImage}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: SIZES.width - 104,
        }}
      >
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{item.fullName}</Text>
          <Text style={styles.lastSeen}>{item.lastMessage}</Text>
        </View>

        <View
          style={{
            position: "absolute",
            right: 4,
            alignItems: "center",
          }}
        >
          <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
          <View>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: item.messageInQueue
                  ? COLORS.primary
                  : "trasparent",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Text style={styles.messageInQueue}>{item.messageInQueue}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderContent = () => {
    return (
      <View style={{ marginBottom: 110 }}>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.gray} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search contacts..."
            value={search}
            onChangeText={handleSearch}
          />
          <TouchableOpacity>
            <Image
              source={icons.editPencil}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: COLORS.gray,
              }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={filteredUsers}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />
      <View style={styles.container}>{renderContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.secondaryWhite,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    width: SIZES.width - 32,
    height: 50,
    marginVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    marginHorizontal: 12,
    backgroundColor: COLORS.white,
  },
  userContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: COLORS.secondaryWhite,
    borderBottomWidth: 1,
  },
  oldBackground: {
    backgroundColor: COLORS.white,
  },
  userImageContainer: {
    paddingVertical: 15,
    marginRight: 22,
  },
  onlineIndicator: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: COLORS.primary,
    position: "absolute",
    top: 14,
    right: 2,
    zIndex: 999,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userInfoContainer: {
    flexDirection: "column",
  },
  userName: {
    fontSize: 14,
    fontFamily: "semiBold",
    color: COLORS.black,
    marginBottom: 4,
  },
  lastSeen: {
    fontSize: 14,
    color: COLORS.secondaryGray,
  },
  lastMessageTime: {
    fontSize: 12,
    color: COLORS.black,
  },
  messageInQueue: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.white,
  },
});

export default Chats;
