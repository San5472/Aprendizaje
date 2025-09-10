import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'bloc/usuarios_bloc.dart';
import 'widgets/loading.dart';

class Home extends StatelessWidget {
  final Map<String, dynamic> datos;
  final bool mostrarSnack;
  const Home({super.key, required this.datos, this.mostrarSnack = false});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => UsuariosBloc()..add(CargarUsuarios()),
      child: Scaffold(
        appBar: AppBar(title: const Text("Datos de la persona")),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // Nombre del usuario del formulario  
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Image.asset('assets/images/carro.png', width: 200, height: 200),

                ],

              ),
              Text(
                "Bienvenido: ${datos["Nombre"]}",
                style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 20),

              // Lista de los usuaris de la API 
              Expanded(
                child: BlocBuilder<UsuariosBloc, UsuariosState>(
                  builder: (context, state) {
                    if (state is UsuariosCargando) {
                      return const Center(child: Loading());
                    } else if (state is UsuariosErrorState) {
                      return Center(child: Text(state.mensaje));
                    } else if (state is UsuariosCargados) {
                      final usuarios = state.usuarios;
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
                    }
                    return const Center(child: Text("Presione para cargar usuarios"));
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
