// import { Image, StyleSheet, View, Platform, Text, ScrollView, TouchableOpacity, Pressable, Modal } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { useState } from 'react';
// import { AntDesign, Entypo, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
// export default function HomeScreen() {
//   const [stock, setStock] = useState('All');
//   const [modalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!modalVisible);
//   };
//   return (
//     <View className="flex-1 w-full h-full pt-10 bg-white">
//       <View className="flex items-center">
//         <Text className="text-lg font-bold text-black">Home</Text>
//       </View>
//       <View className="border border-[#E4E4E4] mt-3"></View>

//       <View className="border-b border-[#E4E4E4] pb-3">
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} className='gap-x-10 mt-4'>
//           <Text className="text-[#292D32] font-medium text-sm">Canned Goods</Text>
//           <Text className="text-[#292D32] font-medium text-sm">Grains and Pasta</Text>
//           <Text className="text-[#292D32] font-medium text-sm">Frozen food</Text>
//           <Text className="text-[#292D32] font-medium text-sm">Baby products</Text>
//         </ScrollView>
//       </View>
//       <View>
//         <View className='border-[#E4E4E4] border-b mt-4 rounded-br-[10px] rounded-bl-[10px] px-3 pb-4'>
//           <View className="flex flex-row justify-center gap-x-5 w-full">
//             <TouchableOpacity
//               onPress={() => setStock('All')}
//               className={`py-3 px-6 rounded-[100px] justify-center items-center  ${stock === 'All' ? 'bg-[#CCEBFF]  border border-[#CCEBFF]' : 'bg-[#00A6FB]'}`}>
//               <Text className={` font-medium text-sm ${stock === 'All' ? 'text-[#00A6FB]' : 'text-white'}`}>
//                 All stocks
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => setStock('Low')}
//               className={`py-3 px-6 rounded-[100px] justify-center items-center  ${stock === 'Low' ? 'bg-[#CCEBFF]  border border-[#CCEBFF]' : 'bg-[#00A6FB]'}`}>
//               <Text className={`font-medium text-sm  ${stock === 'Low' ? 'text-[#00A6FB]' : 'text-white'}`}>
//                 Low stock
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => setStock('Expired')}
//               className={`py-3 px-6 rounded-[100px] justify-center items-center ${stock === 'Expired' ? 'bg-[#CCEBFF]  border border-[#CCEBFF]' : 'bg-[#00A6FB]'}`}>
//               <Text className={` font-medium text-sm  ${stock === 'Expired' ? 'text-[#00A6FB]' : 'text-white'}`}>
//                 Expired
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {stock === 'All' && (
//           <ScrollView className="">
//             <View style={styles.titleContainer}>
//               <View className="px-4 py-6 border-t border-b border-[#E6E6E6] flex flex-row gap-2">
//                 <Image
//                   source={require('@/assets/images/Rectangle.png')}
//                   className=""
//                 />
//                 <View className="pt-3">
//                   <View className="flex flex-row items-center">
//                     <Image
//                       source={require('@/assets/images/Frame.png')}
//                       className=""
//                     />
//                     <View className="pl-2">
//                       <Text className="text-base font-medium text-[#00A6FB] border-b border-[#00A6FB]">Noodles</Text>
//                     </View>
//                   </View>
//                   <View className="flex flex-row items-center mt-2">
//                     <Text className="text-sm font-medium text-[#969696]">per piece</Text>
//                     <Text className="text-sm font-medium text-[#292D32] pl-2">₦ 200</Text>
//                   </View>
//                 </View>
//                 <View className="pt-3">
//                   <View className="bg-[#E3E3E3] rounded-[10px] py-1 px-2">
//                     <Text className="text-sm font-medium text-[#292D32]">Multiple brands</Text>
//                   </View>
//                 </View>
//                 <TouchableOpacity onPress={toggleModal} className="pt-3">
//                   <Entypo name="dots-three-vertical" size={24} color="black" />
//                 </TouchableOpacity>
//                 <Modal
//                   animationType="slide"
//                   transparent={true}
//                   visible={modalVisible}
//                   onRequestClose={toggleModal}
//                 >
//                   <View style={styles.modalContainer}>
//                     <View className="border rounded-tl-2xl rounded-tr-2xl bg-[#FCFCFC] p-6">
//                       <View className="flex gap-5">
//                         <View className="flex-row items-center">
//                           <EvilIcons name="pencil" size={20} color="black" />
//                           <Text className="text-[#0F0F0F] text-sm pl-2">Edit Stock</Text>
//                         </View>
//                         <View className="flex-row items-center">
//                           <AntDesign name="user" size={20} color="black" />
//                           <Text className="text-[#0F0F0F] pl-2 text-sm">Supplier</Text>
//                         </View>
//                         <View className="flex-row items-center">
//                           <EvilIcons name="pencil" size={20} color="black" />
//                           <Text className="text-[#0F0F0F] text-sm pl-2">Export</Text>
//                         </View>
//                         <View className="flex-row items-center">
//                           <MaterialCommunityIcons name="content-copy" size={20} color="black" />
//                           <Text className="text-[#0F0F0F] text-sm pl-2">Duplicate</Text>
//                         </View>
//                         <View className="flex-row items-center">
//                           <AntDesign name="sharealt" size={20} color="black" />
//                           <Text className="text-[#0F0F0F] text-sm pl-2">Share</Text>
//                         </View>
//                         <View className="flex-row items-center">
//                           <AntDesign name="sharealt" size={20} color="black" />
//                           <Text className="text-[#0F0F0F] text-sm pl-2">View history</Text>
//                         </View>
//                         <View className="flex-row items-center">
//                           <AntDesign name="delete" size={20} color="black" />
//                           <Text className="text-[#0F0F0F] text-sm pl-2">Delete</Text>
//                         </View>
//                       </View>

//                     </View>
//                   </View>
//                 </Modal>
//               </View>
//               <View className="-mt-5 ml-52">
//                 <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
//                   <AntDesign name="plus" size={20} color="white" />
//                   <Text className="text-base font-normal text-white">New</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <View style={styles.titleContainer}>
//               <View className="px-4 py-6 border-b border-[#E6E6E6] flex flex-row gap-2">
//                 <Image
//                   source={require('@/assets/images/Rectangle.png')}
//                   className=""
//                 />
//                 <View className="pt-3">
//                   <View className="flex flex-row items-center">
//                     <Image
//                       source={require('@/assets/images/Frame.png')}
//                       className=""
//                     />
//                     <View className="pl-2">
//                       <Text className="text-base font-medium text-[#00A6FB] border-b border-[#00A6FB]">Rice</Text>
//                     </View>
//                   </View>
//                   <View className="flex flex-row items-center mt-2">
//                     <Text className="text-sm font-medium text-[#969696]">per piece</Text>
//                     <Text className="text-sm font-medium text-[#292D32] pl-2">₦ 200</Text>
//                   </View>
//                 </View>
//                 <View className="pt-3">
//                   <View className="bg-[#E3E3E3] rounded-[10px] py-1 px-2">
//                     <Text className="text-sm font-medium text-[#292D32]">Multiple brands</Text>
//                   </View>
//                 </View>
//                 <TouchableOpacity className="pt-3">
//                   <Entypo name="dots-three-vertical" size={24} color="black" />
//                 </TouchableOpacity>
//               </View><View className="-mt-5 ml-52">
//                 <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
//                   <AntDesign name="plus" size={20} color="white" />
//                   <Text className="text-base font-normal text-white">New</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>

//           </ScrollView>
//         )
//         }

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     shadowColor: "#DFDFDF5E",
//     shadowOffset: { width: -2, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'transparent',
//   },
//   modalContent: {
//     width: '100%',
//     backgroundColor: 'white',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,

//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   closeButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#2463EB',
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });
import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { AntDesign, Entypo, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [stock, setStock] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View className="flex-1 w-full h-full pt-10 bg-white">
      <View className="flex items-center">
        <Text className="text-lg font-bold text-black">Home</Text>
      </View>
      <View className="border border-[#E4E4E4] mt-3"></View>

      <View className="border-b border-[#E4E4E4] pb-3">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='gap-x-10 mt-4'>
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
          <ScrollView className="">
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
                <TouchableOpacity onPress={toggleModal} className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={toggleModal}
                >
                  <View style={styles.modalContainer}>
                    <View className="bg-[#FCFCFC] rounded-lg p-6 shadow-lg">
                      <View className="flex gap-5">
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Edit Stock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="user" size={20} color="black" />
                          <Text className="text-[#0F0F0F] pl-2 text-sm">Supplier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Export</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <MaterialCommunityIcons name="content-copy" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Duplicate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="sharealt" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="clockcircleo" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">View history</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="delete" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
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
                    <Text className="text-sm font-medium text-[#292D32]">Multiple brands</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={toggleModal} className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={toggleModal}
                >
                  <View style={styles.modalContainer}>
                    <View className="bg-[#FCFCFC] rounded-lg p-6 shadow-lg">
                      <View className="flex gap-5">
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Edit Stock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="user" size={20} color="black" />
                          <Text className="text-[#0F0F0F] pl-2 text-sm">Supplier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Export</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <MaterialCommunityIcons name="content-copy" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Duplicate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="sharealt" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="clockcircleo" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">View history</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="delete" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
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
                      <Text className="text-base font-medium text-[#00A6FB] border-b border-[#00A6FB]">Spagetti</Text>
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
                <TouchableOpacity onPress={toggleModal} className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={toggleModal}
                >
                  <View style={styles.modalContainer}>
                    <View className="bg-[#FCFCFC] rounded-lg p-6 shadow-lg">
                      <View className="flex gap-5">
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Edit Stock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="user" size={20} color="black" />
                          <Text className="text-[#0F0F0F] pl-2 text-sm">Supplier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Export</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <MaterialCommunityIcons name="content-copy" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Duplicate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="sharealt" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="clockcircleo" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">View history</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="delete" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
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
                <TouchableOpacity onPress={toggleModal} className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={toggleModal}
                >
                  <View style={styles.modalContainer}>
                    <View className="bg-[#FCFCFC] rounded-lg p-6 shadow-lg">
                      <View className="flex gap-5">
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Edit Stock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="user" size={20} color="black" />
                          <Text className="text-[#0F0F0F] pl-2 text-sm">Supplier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Export</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <MaterialCommunityIcons name="content-copy" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Duplicate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="sharealt" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="clockcircleo" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">View history</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="delete" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View className="-mt-5 ml-52">
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
                    <Text className="text-sm font-medium text-[#292D32]">Multiple brands</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={toggleModal} className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={toggleModal}
                >
                  <View style={styles.modalContainer}>
                    <View className="bg-white rounded-lg p-6 shadow-lg">
                      <View className="flex gap-5">
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Edit Stock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="user" size={20} color="black" />
                          <Text className="text-[#0F0F0F] pl-2 text-sm">Supplier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Export</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <MaterialCommunityIcons name="content-copy" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Duplicate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="sharealt" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="clockcircleo" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">View history</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="delete" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}

        {stock === 'Low' && (
          <ScrollView>
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
                <TouchableOpacity onPress={toggleModal} className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={toggleModal}
                >
                  <View style={styles.modalContainer}>
                    <View className="bg-white rounded-lg p-6 shadow-lg">
                      <View className="flex gap-5">
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Edit Stock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="user" size={20} color="black" />
                          <Text className="text-[#0F0F0F] pl-2 text-sm">Supplier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Export</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <MaterialCommunityIcons name="content-copy" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Duplicate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="sharealt" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="clockcircleo" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">View history</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="delete" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB] rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}

        {stock === 'Expired' && (
          <ScrollView>
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
                <TouchableOpacity onPress={toggleModal} className="pt-3">
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={toggleModal}
                >
                  <View style={styles.modalContainer}>
                    <View className="bg-white rounded-lg p-6 shadow-lg">
                      <View className="flex gap-5">
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Edit Stock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="user" size={20} color="black" />
                          <Text className="text-[#0F0F0F] pl-2 text-sm">Supplier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <EvilIcons name="pencil" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Export</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <MaterialCommunityIcons name="content-copy" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Duplicate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="sharealt" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="clockcircleo" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">View history</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalItem}>
                          <AntDesign name="delete" size={20} color="black" />
                          <Text className="text-[#0F0F0F] text-sm pl-2">Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View className="-mt-5 ml-52">
                <TouchableOpacity className="bg-[#00A6FB]  rounded-[51px] w-[117px] h-12 flex flex-row justify-center items-center">
                  <AntDesign name="plus" size={20} color="white" />
                  <Text className="text-base font-normal text-white">New</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
