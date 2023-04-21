create table if not exists users(
	"id" SERIAL primary key,
	"name" VARCHAR(20) not null,
	"email"  VARCHAR(100) unique not null,
	"password" VARCHAR(120) not null,
	"admin" boolean default false,
	"active" boolean default true
);