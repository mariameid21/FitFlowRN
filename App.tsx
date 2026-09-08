
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const features = [
  {
    title: 'Workout Plans',
    description: 'Follow simple workout plans designed for your fitness goals.',
    icon: '💪',
  },
  {
    title: 'Track Progress',
    description: 'Keep track of your workouts and see your progress every day.',
    icon: '📈',
  },
  {
    title: 'Stay Motivated',
    description: 'Get motivated and stay consistent with your fitness journey.',
    icon: '🔥',
  },
];

function App(): React.JSX.Element {
  const handleGetStarted = () => {
    Alert.alert('Welcome to FitFlow!', 'Let’s start your fitness journey.');
  };

  const handleStartTraining = () => {
    Alert.alert('Ready?', 'Your training journey starts now!');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>FitFlow</Text>

        <TouchableOpacity
          onPress={() => Alert.alert('FitFlow', 'Menu opened')}
          style={styles.menuButton}
        >
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.smallTitle}>YOUR FITNESS JOURNEY</Text>

        <Text style={styles.heroTitle}>
          Train Smarter.{'\n'}
          <Text style={styles.highlight}>Live Stronger.</Text>
        </Text>

        <Text style={styles.heroDescription}>
          Build healthy habits, follow effective workouts, and become the
          strongest version of yourself with FitFlow.
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
          }}
          style={styles.heroImage}
        />

        <Pressable style={styles.primaryButton} onPress={handleGetStarted}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </Pressable>
      </View>

      {/* Features */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Everything You Need</Text>

        <Text style={styles.sectionSubtitle}>
          Simple tools to help you stay active and reach your goals.
        </Text>

        {features.map((feature, index) => (
          <View key={index} style={styles.featureCard}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{feature.icon}</Text>
            </View>

            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>{feature.title}</Text>

              <Text style={styles.featureDescription}>
                {feature.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Get Fit?</Text>

        <Text style={styles.ctaDescription}>
          Start today and make every workout count.
        </Text>

        <Pressable style={styles.ctaButton} onPress={handleStartTraining}>
          <Text style={styles.ctaButtonText}>Start Training</Text>
        </Pressable>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 FitFlow</Text>
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
    paddingTop: 22,
    paddingBottom: 12,
  },

  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#6C5CE7',
  },

  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
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
    paddingTop: 25,
    paddingBottom: 35,
  },

  smallTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#8B83C7',
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  heroTitle: {
    fontSize: 38,
    fontWeight: '800',
    lineHeight: 44,
    color: '#20202A',
    marginBottom: 15,
  },

  highlight: {
    color: '#6C5CE7',
  },

  heroDescription: {
    fontSize: 16,
    lineHeight: 25,
    color: '#777783',
    marginBottom: 22,
  },

  heroImage: {
    width: '100%',
    height: 230,
    borderRadius: 24,
    marginBottom: 20,
  },

  primaryButton: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 16,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  featuresSection: {
    paddingHorizontal: 24,
    paddingBottom: 25,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#20202A',
    marginBottom: 8,
  },

  sectionSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#777783',
    marginBottom: 20,
  },

  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginBottom: 14,
    borderRadius: 18,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#F0EEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  icon: {
    fontSize: 26,
  },

  featureTextContainer: {
    flex: 1,
  },

  featureTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#252530',
    marginBottom: 5,
  },

  featureDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#858590',
  },

  ctaSection: {
    marginHorizontal: 24,
    marginTop: 10,
    marginBottom: 30,
    padding: 28,
    borderRadius: 24,
    backgroundColor: '#6C5CE7',
    alignItems: 'center',
  },

  ctaTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  ctaDescription: {
    fontSize: 14,
    color: '#E8E5FF',
    textAlign: 'center',
    marginBottom: 20,
  },

  ctaButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
  },

  ctaButtonText: {
    color: '#6C5CE7',
    fontSize: 15,
    fontWeight: '800',
  },

  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  footerText: {
    fontSize: 13,
    color: '#9999A5',
  },
});

export default App;


