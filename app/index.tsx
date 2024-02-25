import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [turn, setTurn] = useState<'x' | 'o'>('x');
  return (
    <View className="w-screen h-screen flex  justify-center items-center bg-slate-50">
      <View>
        <Text className='text-black text-xl mb-2'>Vez do jogador:{" "}
          <Text className='font-bold text-3xl'>
            {turn}
          </Text>
        </Text>
        <Board turn={turn} setTurn={() => setTurn(old => {
          return old == "o" ? "x" : "o"
        })} />
      </View>
    </View>
  );
}

interface BoardProps {
  turn: "x" | "o";
  setTurn: () => void;
}

const Board = ({ turn, setTurn }: BoardProps) => {
  const [grid, setValues] = useState<any[]>(Array(3).fill(Array(3).fill("")));

  return (
    <View className='flex flex-col aspect-square gap-1'>
      {grid.map((row, idx_row) => {
        return <View className='gap-1 flex flex-row'>
          {row.map((value: any, idx_col: number) => (
            <TouchableOpacity className='bg-slate-300 rounded-md w-20 h-20 items-center justify-center' onPress={() => {
              setTurn()
              setValues(old => {
                const newGrid = old.map(row => [...row]);

                newGrid[idx_row][idx_col] = turn;

                return newGrid;
              })
            }}>
              <Text className='font-bold text-[36px]'>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      })}
    </View>
  )
}