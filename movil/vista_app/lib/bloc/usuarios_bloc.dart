import 'package:flutter_bloc/flutter_bloc.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

// Eventos
abstract class UsuariosEvent {}
class CargarUsuarios extends UsuariosEvent {}

// Estados
abstract class UsuariosState {}
class UsuariosInicial extends UsuariosState {}
class UsuariosCargando extends UsuariosState {}
class UsuariosCargados extends UsuariosState {
  final List<dynamic> usuarios;
  UsuariosCargados(this.usuarios);
}
class UsuariosErrorState extends UsuariosState {   // <-- error definido
  final String mensaje;
  UsuariosErrorState(this.mensaje);
}

// Bloc de la carga de los usuarios
class UsuariosBloc extends Bloc<UsuariosEvent, UsuariosState> {
  UsuariosBloc() : super(UsuariosInicial()) {
    on<CargarUsuarios>((event, emit) async {
      emit(UsuariosCargando());

      try {

        await Future.delayed(const Duration(seconds: 2));

        final response = await http
            .get(Uri.parse("https://jsonplaceholder.typicode.com/users"));

        if (response.statusCode == 200) {
          final data = jsonDecode(response.body);
          emit(UsuariosCargados(data));
        } else {
          emit(UsuariosErrorState("Error al cargar usuarios")); 
        }
      } catch (e) {
        emit(UsuariosErrorState("Error: $e")); 
      }
    });
  }
}
