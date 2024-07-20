import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import Swiper from 'react-native-swiper';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Index = () => {

  return (
    <View className='flex-1 bg-[#F4F7FE] h-full w-full'>
      <View></View>
      <Swiper

        dot={
          <View
            style={{
              backgroundColor: 'gray',
              width: "6%",
              height: "1.5%",
              borderRadius: 7,
              marginLeft: "3%",
              marginRight: "3%",
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#FF9D16',
              width: "15%",
              height: "1.5%",
              borderRadius: 7,
              marginLeft: "3%",
              marginRight: "3%",
            }}
          />
        }
        paginationStyle={{
          top: "70%"
        }}
        loop={false}
      >
        <View className='h-full w-full'>
          <View className="w-full h-[490px]">
            <Image
              source={require('@/assets/images/Rectangle 1.png')}
              className="w-full h-full pt-10 object-contain"
            />
          </View>
          <View className="w-full pt-3">
            <View className="w-full flex flex-row items-center justify-between px-3">

              <View className='w-32 h-20'>
                <Image
                  source={require('@/assets/images/01.png')}
                  className=" object-contain"
                />
              </View>
              <Text className="text-base text-[#3B3B3B] font-bold">Welcome to <Text className="text-[#00A6FB] text-base font-bold">SPINGO</Text>! Your {'\n'} ultimate Business {'\n'} Companion.</Text>
            </View>
            <View className='p-3 pt-4'>
              <Text className=" text-[#3B3B3B] text-sm">Streamline your business operations and maximize efficiency with our all-in-one platform.</Text>
            </View>
            <View className="flex items-center justify-center flex-col mx-8 gap-y-3">
            <Link href={'/(tabs)'} asChild>
              <TouchableOpacity className="bg-[#00A6FB] py-4 rounded-[51px] w-full flex items-center">
                <Text className="text-white text-base">Home</Text>
              </TouchableOpacity>
              </Link>
              <Link href={'/signup'} asChild>
              <TouchableOpacity className="border border-[#00A6FB] py-4 rounded-[51px] w-full flex items-center">
                <Text className="text-[#00A6FB] text-base">Sign up</Text>
              </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Index;
