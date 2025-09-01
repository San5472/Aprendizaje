import 'package:flutter/material.dart';

class SuccessTarea extends StatelessWidget {
  const SuccessTarea({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.black87),
        borderRadius: BorderRadius.circular(8),
      ),
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Tareas pendientes
          Text("Cosas por comprar", style: TextStyle(fontWeight: FontWeight.bold)),
          SizedBox(height: 4),
          Text("Comprar"),
          Text("Ir al Ara"),

          SizedBox(height: 12), // Espacio entre las dos secciones

          // Espacio de transito
          Text("Tránsito", style: TextStyle(fontWeight: FontWeight.bold)),
          SizedBox(height: 4),
          Padding(
            padding: EdgeInsets.only(left: 16), 
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Trámites"),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
