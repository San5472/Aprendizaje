import 'package:flutter/material.dart';

class LoadingPersona extends StatelessWidget {
  const LoadingPersona({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(child: CircularProgressIndicator());
  }
}