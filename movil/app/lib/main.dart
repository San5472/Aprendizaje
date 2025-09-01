import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

enum MyState {loading,success,error}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'App flutter',
      home: Scaffold(
        appBar: AppBar(
          title: const Text(""),
          centerTitle: true,
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
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
              ),
              const SizedBox(height: 20),

              const Text("Tareas",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              Container(
                margin: const EdgeInsets.only(top: 8),
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.black87),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Comprar"),
                    SizedBox(height: 4),
                    Text("Ir al Ara"),
                  ],
                ),
              ),
              const SizedBox(height: 20),

              const Text("Transito",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              Container(
                margin: const EdgeInsets.only(top: 8),
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.black),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: const Text("Tramite"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}