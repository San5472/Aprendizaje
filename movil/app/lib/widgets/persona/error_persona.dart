import 'package:flutter/material.dart';

class ErrorPersona extends StatelessWidget {
  const ErrorPersona({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text("❌ Error al cargar los datos de la persona",
        style: TextStyle(color: Colors.red));
  }
}