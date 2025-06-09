import { View, Text, ScrollView, FlatList } from 'react-native';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
import { SpaceV } from '../../components/space/Space';
import React from 'react';
import { BackgroundGradient } from '../../components/background/Background';
import { Week } from '../../models/types';
import { WeekItem } from './HomeComponent';

const HomeScreen = () => {
  const { colors } = useColors();
  const appStyles = useStyles();

  const getChapterList = (): Week[] => {
    const totalDays = 100;
    const daysPerWeek = 7;
    const weeks: Week[] = [];
    let dayCount = 1;

    while (dayCount <= totalDays) {
      const remainingDays = totalDays - dayCount + 1;
      const daysInWeek = Math.min(daysPerWeek, remainingDays);

      const week: Week = {
        weeksList: `WEEK ${weeks.length + 1}`,
        daysList: Array.from({ length: daysInWeek }, (_, dayIndex) => {
          const dayNumber = dayCount + dayIndex;
          return {
            listDay: `Day ${dayNumber}`,
            listId: `A${dayNumber}`,
            listTime: `Chapter ${5 + (dayIndex % 3)} min`
          };
        })
      };
      weeks.push(week);
      dayCount += daysInWeek;
    }
    return weeks;
  };

  const weeksList = getChapterList();

  return (
    <BackgroundGradient>
      <View style={{ flex: 1 }}>
        <SpaceV size={50} />
        <FlatList
          data={weeksList}
          renderItem={({ item }) => <WeekItem item={item} />}
          keyExtractor={(week) => week.weeksList}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </BackgroundGradient>
  );
};

export default HomeScreen;
