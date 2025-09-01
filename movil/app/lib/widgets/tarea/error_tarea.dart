import 'package:flutter/material.dart';

class ErrorTarea extends StatelessWidget {
  const ErrorTarea({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text("❌ Error al cargar tareas pendientes",
        style: TextStyle(color: Colors.red));
  }
}
