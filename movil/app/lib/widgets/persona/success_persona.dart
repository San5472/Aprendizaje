import 'package:flutter/material.dart';

class SuccessPersona extends StatelessWidget {
  const SuccessPersona({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.black),
        borderRadius: BorderRadius.circular(8),
      ),
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text("Hola, Carlos",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          SizedBox(height: 8),
          Text("Contacto: usuario@gmail.com"),
          SizedBox(height: 4),
          Text("Saldo : 1200"),
        ],
      ),
    );
  }
}
