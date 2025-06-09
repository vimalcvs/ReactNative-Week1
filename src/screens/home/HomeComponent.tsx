import { Day, Week } from '../../models/types';
import { View, Text, FlatList } from 'react-native';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
import { SpaceV } from '../../components/space/Space';

export const DayItem = ({ item }: { item: Day }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  return (
    <View style={[appStyles.card]}>
      <Text style={[appStyles.heading, { color: colors.textPrimary }]}>{item.listDay}</Text>
      <SpaceV size={6} />
      <Text style={[appStyles.caption, { color: colors.textSecondary }]}>{item.listTime}</Text>
    </View>
  );
};

export const WeekItem = ({ item }: { item: Week }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  return (
    <View>
      <Text
        style={[
          appStyles.bodyText,
          { color: colors.textPrimary, marginVertical: 6, marginHorizontal: 10 },
        ]} >
        {item.weeksList}
      </Text>
      {item.daysList.map(day => (
        <DayItem key={day.listId} item={day} />
      ))}
    </View>
  );
};
