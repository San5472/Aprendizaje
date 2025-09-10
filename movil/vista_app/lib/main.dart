import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:convert';


import 'package:vista_app/home.dart';

void main() {
  runApp(const MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter',
      theme: ThemeData(
        brightness: Brightness.dark, 
        scaffoldBackgroundColor: Colors.black, 
        textTheme: const TextTheme(
          bodyLarge: TextStyle(color: Colors.white),
          bodyMedium: TextStyle(color: Colors.white),
          bodySmall: TextStyle(color: Colors.white),
          titleLarge: TextStyle(color: Colors.white),
        ),
        inputDecorationTheme: const InputDecorationTheme(
          labelStyle: TextStyle(color: Colors.white),
          enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(color: Colors.white), 
          ),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(color: Color.fromARGB(255, 92, 94, 97)), 
          ),
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.black,
          titleTextStyle: TextStyle(color: Colors.white, fontSize: 20),
          iconTheme: IconThemeData(color: Colors.white),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color.fromARGB(255, 83, 84, 84), 
            foregroundColor: Colors.white, 
          ),
        ),
      ),
      home: const MyHomePage(title: 'Guardar datos'),
    );
  }
}
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

// Cuerpo de la vista de seleccion de datos.
class _MyHomePageState extends State<MyHomePage> {
  final TextEditingController campo1 = TextEditingController();
  final TextEditingController campo2 = TextEditingController();

  Map<String, dynamic> datos = {};

  void guardarDatos() {
    setState((){
      datos= {
        "Cedula": campo1.text,
        "Nombre": campo2.text,
      };
    });


    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => Home(datos: datos))
    ).then((_) {
      // limpia las casillas al volver a la pagina principal
      campo1.clear();
      campo2.clear();
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Padding( 
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch, 
          children: [
            // Cedula
            TextField(
              controller: campo1,  // Json 
              keyboardType: TextInputType.number, // Solo acepta numeross
              inputFormatters: [
                FilteringTextInputFormatter.digitsOnly,
                LengthLimitingTextInputFormatter(10), // Capacidad maxima de 10 numeros para la cedula
              ],
              decoration: InputDecoration(
                labelText: 'Campo cedula',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.zero
                )
              ),
            ),
            // Nombre
            SizedBox(height: 15.0),
            TextField(
              controller: campo2,
              decoration: InputDecoration(
                labelText: 'Campo Nombre',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(20.0)),
                ),
              ),
            ),

            const SizedBox(height: 20.0),
            // Boton
            ElevatedButton(onPressed: guardarDatos, child: const Text("Guardar"),
            ),
          ],
        ),
      ),
    );
  }
}