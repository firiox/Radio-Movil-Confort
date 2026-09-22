'''
PARA ANALISIS Y DISEÑO 2
'''
print("Hello world")
#Añadir administradores
#usar bases de datos
nombre = "Ronaldo"
administrador = True

class Sistema:
    pass

class Administrador():
    def __init__(self, usuario, password):
        self.usuario = Usuario(usuario, password)
        self.admin = True
    def __str__(self):
        return f"Usuario: {self.usuario.usuario}, Contraseña: {self.usuario.contraseña}, Admin: {self.admin}"
    def crear_conductor(self, usuario, password):
        return Conductor(usuario, password)
    def listar_conductores(self):
        # Aquí se implementaría la lógica para listar los conductores
        pass
    def borrar_conductor(self, conductor):
        # Aquí se implementaría la lógica para borrar un conductor
        pass



class Conductor():
    def __init__(self, usuario, password):
        self.usuario = Usuario(usuario, password)
        self.admin = False
        self.estado = ""
        self.ubicacion = None

    def __str__(self):
        return f"Usuario: {self.usuario.usuario}, Contraseña: {self.usuario.contraseña}, Admin: {self.admin}"
    def iniciar_carrera(self):
        print(f"El conductor {self.usuario.usuario} ha iniciado la carrera.")

class Usuario():
    def __init__(self, usuario, contraseña):
        self.usuario = usuario
        self.contraseña = contraseña
    def __str__(self):
        return f"Usuario: {self.usuario}, Contraseña: {self.contraseña}"

class Operador():
    def __init__(self, usuario, password):
        self.usuario = Usuario(usuario, password)
        self.admin = False
    def __str__(self):
        return f"Usuario: {self.usuario.usuario}, Contraseña: {self.usuario.contraseña}, Admin: {self.admin}"

user1 = Usuario(nombre, "1234")
print(user1)

user11 = Administrador(nombre, "1234")
print(user11)

user2 = user11.crear_conductor("Pepe", "2221")
print(user2)
user2.iniciar_carrera()

user3 = Operador("Gomez", "1122")
print(user3)
