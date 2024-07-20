import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
export default function TabTwoScreen() {
  const [stock, setStock] = useState('All');
  return (
    <View className="flex-1 w-full h-full bg-white pt-10">
      <View className="flex items-center">
        <Text className="text-lg font-bold text-black">explore</Text>
      </View>
      <View className="border border-[#E4E4E4] mt-3"></View>
      <View className="border-b pb-3 border-[#E4E4E4]">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='gap-x-10 mt-4 '>
          <Text className="text-[#292D32] font-medium text-sm">Canned Goods</Text>
          <Text className="text-[#292D32] font-medium text-sm">Grains and Pasta</Text>
          <Text className="text-[#292D32] font-medium text-sm">Frozen food</Text>
          <Text className="text-[#292D32] font-medium text-sm">Baby products</Text>
        </ScrollView>
      </View>
      <View>
        <View className='border-[#E4E4E4] border-b mt-4 rounded-br-[10px] rounded-bl-[10px] px-3 pb-4'>
          <View className="flex flex-row justify-center gap-x-5 w-full">
            <TouchableOpacity
              onPress={() => setStock('All')}
              className={`py-3 px-6 rounded-[100px] justify-center items-center  ${stock === 'All' ? 'bg-[#CCEBFF]  border border-[#CCEBFF]' : 'bg-[#00A6FB]'}`}>
              <Text className={` font-medium text-sm ${stock === 'All' ? 'text-[#00A6FB]' : 'text-white'}`}>
                All stocks
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setStock('Low')}
              className={`py-3 px-6 rounded-[100px] justify-center items-center  ${stock === 'Low' ? 'bg-[#CCEBFF]  border border-[#CCEBFF]' : 'bg-[#00A6FB]'}`}>
              <Text className={`font-medium text-sm  ${stock === 'Low' ? 'text-[#00A6FB]' : 'text-white'}`}>
                Low stock
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setStock('Expired')}
              className={`py-3 px-6 rounded-[100px] justify-center items-center ${stock === 'Expired' ? 'bg-[#CCEBFF]  border border-[#CCEBFF]' : 'bg-[#00A6FB]'}`}>
              <Text className={` font-medium text-sm  ${stock === 'Expired' ? 'text-[#00A6FB]' : 'text-white'}`}>
                Expired
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {stock === 'All' && (
          <ScrollView className="flex-1">
            <View style={styles.titleContainer}>
              <View className="px-4 py-6 border-t border-b border-[#E6E6E6] flex flex-row gap-2">
                <Image
                  source={require('@/assets/images/Rectangle.png')}
                  className=""
                />
                <View className="pt-3">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require('@/assets/images/Frame.png')}
                      className=""
                    />
                    <View className="pl-2">
                      <Text className="text-base font-medium text-[#00A6FB] border-b border-[#00A6FB]">Noodles</Text>
                    </View>
                  </View>
                  <View className="flex flex-row items-center mt-2">
                    <Text className="text-sm font-medium text-[#969696]">per piece</Text>
                    <Text className="text-sm font-medium text-[#292D32] pl-2">₦ 200</Text>
                  </View>
                </View>
                <View className="pt-3">
                  <View className="bg-[#E3E3E3] rounded-[10px] py-1 px-2">
                    <Text className="text-sm font-medium text-[#292D32]">Multiple brands</Text>
                  </View>
                </View>
                <TouchableOpacity className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
              </View><View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <View className="px-4 py-6 border-b border-[#E6E6E6] flex flex-row gap-2">
                <Image
                  source={require('@/assets/images/Rectangle.png')}
                  className=""
                />
                <View className="pt-3">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require('@/assets/images/Frame.png')}
                      className=""
                    />
                    <View className="pl-2">
                      <Text className="text-base font-medium text-[#00A6FB] border-b border-[#00A6FB]">Rice</Text>
                    </View>
                  </View>
                  <View className="flex flex-row items-center mt-2">
                    <Text className="text-sm font-medium text-[#969696]">per piece</Text>
                    <Text className="text-sm font-medium text-[#292D32] pl-2">₦ 200</Text>
                  </View>
                </View>
                <View className="pt-3">
                  <View className="bg-[#E3E3E3] rounded-[10px] py-1 px-2">
                    <Text className="text-sm font-medium text-[#292D32]">Indomie</Text>
                  </View>
                </View>
                <TouchableOpacity className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
              </View><View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <View className="px-4 py-6 border-b border-[#E6E6E6] flex flex-row gap-2">
                <Image
                  source={require('@/assets/images/Rectangle.png')}
                  className=""
                />
                <View className="pt-3">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require('@/assets/images/Frame.png')}
                      className=""
                    />
                    <View className="pl-2">
                      <Text className="text-base font-medium text-[#00A6FB] border-b border-[#00A6FB]">Rice</Text>
                    </View>
                  </View>
                  <View className="flex flex-row items-center mt-2">
                    <Text className="text-sm font-medium text-[#969696]">per piece</Text>
                    <Text className="text-sm font-medium text-[#292D32] pl-2">₦ 200</Text>
                  </View>
                </View>
                <View className="pt-3">
                  <View className="bg-[#E3E3E3] rounded-[10px] py-1 px-2">
                    <Text className="text-sm font-medium text-[#292D32]">Indomie</Text>
                  </View>
                </View>
                <TouchableOpacity className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
              </View><View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <View className="px-4 py-6 border-b border-[#E6E6E6] flex flex-row gap-2">
                <Image
                  source={require('@/assets/images/Rectangle.png')}
                  className=""
                />
                <View className="pt-3">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require('@/assets/images/Frame.png')}
                      className=""
                    />
                    <View className="pl-2">
                      <Text className="text-base font-medium text-[#00A6FB] border-b border-[#00A6FB]">Spaghetti</Text>
                    </View>
                  </View>
                  <View className="flex flex-row items-center mt-2">
                    <Text className="text-sm font-medium text-[#969696]">per piece</Text>
                    <Text className="text-sm font-medium text-[#292D32] pl-2">₦ 200</Text>
                  </View>
                </View>
                <View className="pt-3">
                  <View className="bg-[#E3E3E3] rounded-[10px] py-1 px-2">
                    <Text className="text-sm font-medium text-[#292D32]">Multiple brands</Text>
                  </View>
                </View>
                <TouchableOpacity className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
              </View><View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <View className="px-4 py-6 border-b border-[#E6E6E6] flex flex-row gap-2">
                <Image
                  source={require('@/assets/images/Rectangle.png')}
                  className=""
                />
                <View className="pt-3">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require('@/assets/images/Frame.png')}
                      className=""
                    />
                    <View className="pl-2">
                      <Text className="text-base font-medium text-[#00A6FB] border-b border-[#00A6FB]">Toothpaste</Text>
                    </View>

                  </View>
                  <View className="flex flex-row items-center mt-2">
                    <Text className="text-sm font-medium text-[#969696]">per piece</Text>
                    <Text className="text-sm font-medium text-[#292D32] pl-2">₦ 200</Text>
                  </View>
                </View>
                <View className="pt-3">
                  <View className="bg-[#E3E3E3] rounded-[10px] py-1 px-2">
                    <Text className="text-sm font-medium text-[#292D32]">Multiple brands</Text>
                  </View>
                </View>
                <TouchableOpacity className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
              </View><View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
