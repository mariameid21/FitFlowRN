import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

type Props = {
  name: string;
  category: string;
  duration: string;
  calories: string;
  onEdit?: () => void;
  onDelete?: () => void;
  showButtons?: boolean;
  children?: React.ReactNode;
};

function WorkoutCard({
  name,
  category,
  duration,
  calories,
  onEdit,
  onDelete,
  showButtons = true,
  children,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.category}>
          {category}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.info}>
          ⏱ {duration}
        </Text>

        <Text style={styles.info}>
          🔥 {calories}
        </Text>
      </View>

      {children}

      {showButtons && (
        <View style={styles.buttons}>
          <Pressable
            style={styles.editButton}
            onPress={onEdit}>
            <Text style={styles.editText}>
              Edit
            </Text>
          </Pressable>

          <Pressable
            style={styles.deleteButton}
            onPress={onDelete}>
            <Text style={styles.deleteText}>
              Delete
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#202124',
    flex: 1,
  },

  category: {
    backgroundColor: '#EDEBFF',
    color: '#6C5CE7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 11,
    fontWeight: '700',
  },

  infoRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  info: {
    fontSize: 13,
    color: '#777777',
    marginRight: 20,
  },

  buttons: {
    flexDirection: 'row',
    marginTop: 15,
  },

  editButton: {
    flex: 1,
    backgroundColor: '#EDEBFF',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 6,
  },

  editText: {
    color: '#6C5CE7',
    fontWeight: '700',
  },

  deleteButton: {
    flex: 1,
    backgroundColor: '#FFE8E8',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 6,
  },

  deleteText: {
    color: '#D64545',
    fontWeight: '700',
  },
});

export default WorkoutCard;