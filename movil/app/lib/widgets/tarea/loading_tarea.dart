import 'package:flutter/material.dart';

class LoadingTarea extends StatelessWidget {
  const LoadingTarea({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(child: CircularProgressIndicator());
  }
}