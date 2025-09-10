import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'bloc/bloc.dart';
import 'home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter con bloc',
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: Colors.black,
      ),
      home: BlocProvider(
        create: (_) => FormBloc(),
        child: const MyHomePage(title: 'Inicio'),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final TextEditingController campo1 = TextEditingController();
  final TextEditingController campo2 = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BlocListener<FormBloc, FormularioState>(
      listener: (context, state) {
        if (state is FormularioGuardado) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text("Lista de sus trabajadores.")),
          );

          campo1.clear();
          campo2.clear();

          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => Home(datos: state.datos)),
          );
        } else if (state is FormularioError) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text(state.mensaje)),
          );
        }
      },
      child: Scaffold(
        appBar: AppBar(title: Text(widget.title)),
        body: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
               // Campo del nombre
              TextField(
                controller: campo2,
                decoration: const InputDecoration(
                  labelText: 'Nombre Usuario',
                  border: OutlineInputBorder(),
                ),
              ),

              const SizedBox(height: 15.0),
              TextField(
                controller: campo1,
                keyboardType: TextInputType.number,
                inputFormatters: [
                  FilteringTextInputFormatter.digitsOnly,
                  LengthLimitingTextInputFormatter(10),
                ],
                decoration: const InputDecoration(
                  labelText: 'Contraseña',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 20.0),

              // Botón para guardar los datos
              BlocBuilder<FormBloc, FormularioState>(
                builder: (context, state) {
                  if (state is FormularioGuardando) {
                    return const Center(
                      child: CircularProgressIndicator(),
                    );
                  }
                  return ElevatedButton(
                    onPressed: () {
                      context.read<FormBloc>().add(
                            GuardarFormulario(
                              cedula: campo1.text,
                              nombre: campo2.text,
                            ),
                          );
                    },
                    child: const Text("Entrar"),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
