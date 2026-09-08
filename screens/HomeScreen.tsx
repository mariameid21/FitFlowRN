import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

const features = [
  {
    id: '1',
    icon: '🏋️',
    title: 'Workout Plans',
    description:
      'Follow simple workout plans made for your fitness goals.',
  },
  {
    id: '2',
    icon: '📊',
    title: 'Track Progress',
    description:
      'Keep track of your workouts and see your progress.',
  },
  {
    id: '3',
    icon: '🔥',
    title: 'Stay Motivated',
    description:
      'Stay consistent and keep moving toward your goals.',
  },
];

function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>FitFlow</Text>

        <Pressable
          style={styles.menuButton}
          onPress={() =>
            Alert.alert('FitFlow', 'Menu pressed')
          }>
          <Text style={styles.menuText}>☰</Text>
        </Pressable>
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.smallTitle}>
          YOUR FITNESS JOURNEY
        </Text>

        <Text style={styles.title}>
          Train Smarter.{'\n'}
          Live Stronger.
        </Text>

        <Text style={styles.description}>
          Build healthy habits, follow effective workouts, and become
          the strongest version of yourself.
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
          }}
          style={styles.heroImage}
        />

        <Pressable
          style={styles.primaryButton}
          onPress={() =>
            Alert.alert(
              'Welcome!',
              'Let’s start your journey!',
            )
          }>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>

      {/* Features */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Why FitFlow?</Text>

        {features.map(feature => (
          <View
            style={styles.featureCard}
            key={feature.id}>
            
            <Text style={styles.featureIcon}>
              {feature.icon}
            </Text>

            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>
                {feature.title}
              </Text>

              <Text style={styles.featureDescription}>
                {feature.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* CTA */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>
          Ready to get stronger?
        </Text>

        <Text style={styles.ctaText}>
          Start training today and make every workout count.
        </Text>

        <Pressable
          style={styles.secondaryButton}
          onPress={() =>
            Alert.alert(
              'Training',
              'Your workout is starting!',
            )
          }>
          <Text style={styles.secondaryButtonText}>
            Start Training
          </Text>
        </Pressable>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 FitFlow
        </Text>

        <Text style={styles.footerText}>
          Train • Track • Transform
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 15,
  },

  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#6C5CE7',
  },

  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EDEBFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuText: {
    fontSize: 22,
    color: '#6C5CE7',
  },

  hero: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  smallTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6C5CE7',
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#202124',
    lineHeight: 45,
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: '#707070',
    marginBottom: 22,
  },

  heroImage: {
    width: '100%',
    height: 210,
    borderRadius: 22,
    marginBottom: 20,
  },

  primaryButton: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  featuresSection: {
    paddingHorizontal: 24,
    paddingTop: 35,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#202124',
    marginBottom: 18,
  },

  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    alignItems: 'center',
  },

  featureIcon: {
    fontSize: 30,
    marginRight: 15,
  },

  featureContent: {
    flex: 1,
  },

  featureTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 5,
  },

  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#777777',
  },

  cta: {
    margin: 24,
    padding: 25,
    borderRadius: 22,
    backgroundColor: '#EDEBFF',
    alignItems: 'center',
  },

  ctaTitle: {
    fontSize: 23,
    fontWeight: '800',
    color: '#202124',
    textAlign: 'center',
    marginBottom: 8,
  },

  ctaText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#707070',
    textAlign: 'center',
    marginBottom: 18,
  },

  secondaryButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 12,
  },

  secondaryButtonText: {
    color: '#6C5CE7',
    fontWeight: '700',
    fontSize: 15,
  },

  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  footerText: {
    color: '#999999',
    fontSize: 12,
    marginBottom: 4,
  },
});

export default HomeScreen;

