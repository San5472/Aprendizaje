import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'widgets/loading.dart';
class Home extends StatefulWidget {
  final Map<String, dynamic> datos; // los datos del formulario
  const Home({super.key, required this.datos});

  @override
  State<Home> createState() => _HomeState();
}

enum HomeState {
  loading
}

class _HomeState extends State<Home> {
  bool mostrarLoading = true;
  late Future<List<dynamic>> _usuarios;

  // Método que consume el JSON
  Future<List<dynamic>> fetchUsuarios() async {
    final response = await http.get(Uri.parse("https://jsonplaceholder.typicode.com/users"));

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception("Error al cargar usuarios"); // en caso de que la API se encuentre caida mostrara un error
    }
  }

  @override
  void initState() {
    super.initState();
    _usuarios = fetchUsuarios(); // hace el llamado de la api cuando la necesita

    Future.delayed(const Duration(seconds: 3), (){
      setState(() {
        mostrarLoading = false;
      });
    });
  }


  @override
  Widget build(BuildContext context) {
    if (mostrarLoading) {
      return const Scaffold(
        body: Center(child: Loading()),
      );
    }
    return Scaffold(
      appBar: AppBar(title: const Text("Datos de la personas")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Nombre de la persona mostrada en la vista del home
            Text(
              "Bienvenido: ${widget.datos["Nombre"]}",
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),

            // Lista de usuarios desde la API
            Expanded(
              child: FutureBuilder<List<dynamic>>(
                future: _usuarios,
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  } else if (snapshot.hasError) {
                    return Center(child: Text("Error: ${snapshot.error}"));
                  } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
                    return const Center(child: Text("No hay usuarios"));
                  }

                  final usuarios = snapshot.data!;
                  return ListView.builder(
                    itemCount: usuarios.length,
                    itemBuilder: (context, index) {
                      final usuario = usuarios[index];
                      return ListTile(
                        leading: const Icon(Icons.person),
                        title: Text(usuario["name"]),
                        subtitle: Text(usuario["email"]),
                      );
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}