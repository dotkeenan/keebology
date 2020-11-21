--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
12	Obinslab Anne Pro 2	9400	/images/ObinslabAnnePro2.jpg	White RGB LED 60% Double Shot PBT Mechanical Keyboard	White RGB LED 60% Double Shot PBT Mechanical Keyboard.  Can be used wired over USB-C or wirelessly over Bluetooth 4.0.  Large 1900 mah battery with Built-in on/off switch to conserve battery power.  ObinsLab Starter companion computer software for programming keyboard layout, function keys, lighting effects, battery life monitoring, macros, and updating firmware.  Bluetooth functionality is compatible with Windows, Mac, Linux, iOS, and Android.
14	Varmilo VA87M Koi	16600	/images/VarmiloVA87MKoi.jpg	Varmilo VA87M Koi TKL Dye Sub PBT Mechanical Keyboard	The Koi keyboard is a collaboration between Varmilo & Hua Culture Girls.  The Koi fish symbolize good luck, abundance and perseverance. Save space with the TKL form factor!  Genuine Cherry MX Red Switches - suited for gamers with a linear path and lightweight keys for rapid actuation.  Premium PBT keycaps using Dye Sublimation.  Follows the standard QWERTY ANSI layout.  Features full USB N-Key Rollover.  USB-C interface with 60 inch theme matching cable.
7	Ajazz K620T	7500	/images/AjazzK620T.jpg	62 Keys RGB Bluetooth Wireless/Wired Mechanical Keyboard	Inspired by the community, we designed the K620T keyboard to maximize portability and functionality. It is engineered with more than 19 types of RGB backlight options, as well as a static white backlight. It is a keyboard that is always in sync with your mood to keep you happy and productive. Easily cycle through the different backlight schemes using the lights effect key.
8	AKKO 3068 9009	9999	/images/AKKO3068.jpg	Tenkeyless Mechanical Keyboard with Cherry MX Switch, N-Key Rollover, 85% PBT Keycaps, Type C Port for Gamers	AKKO is keen to its unique aesthetics and perfection, thus after several versions of 3068 keyboard, here we are bringing you the AKKO 3068-9009 retro-style mechanical keyboard, inspired by famous Cherry G80-9009. With the genuine vintage color, slightly red and blue, the overall look is quite classic and elegant, and unforgettable color scheme for keyboard.
9	Ducky x Varmilo MIYA Pro Sakura	11900	/images/DuckyxVarmiloMIYAProSakura.jpg	Ducky x Varmilo MIYA Pro Sakura Pink LED 65% Dye Sub PBT Mechanical Keyboard	Ducky and Varmilo are considered by many to be the best of the best when it comes to quality mechanical keyboards. These two titans have collaborated to produce a premium feeling 65% keyboar.  Extremely well-built with Cherry MX switches and PBT keycaps. Fantastic collaboration between Ducky and Varmilo. 65% board, perfect for saving space. Standard sized keys can be easily swapped out unlike some small boards. 
10	Ducky x MK Creator Mecha Mini	12900	/images/DuckyxMKCreatorMechaMiniRGB.jpg	60% keyboard made with Dark Purple Cast Aluminum frame, exclusive Seamless PBT Pudding Keycaps, and RGB lighting modes	RGB 60% Double Shot Pudding PBT Mechanical Keyboard.  Dark Purple Cast Aluminum frame with MK x Ducky custom graphics + Round 1.  Exclusive Creator Purple + White Seamless PBT Pudding keycaps.  Exclusive bonus Creator spacebar (recommended for low light environments when using LEDs)\n
11	KBParadise V80	11900	/images/KBParadiseV80.jpg	KBParadise V80 Miami TKL Double Shot ABS Mechanical Keyboard	Go back to basics with the KBParadise V80 Keyboard. Fitted with your choice of keycaps and keycaps, as well as the option for LEDs, this tenkeyless board features an 80% layout with all the function you need and none of the clutter. Think of the V80 as a minimalist mechanical keyboard with maximum utility.
13	Varmilo VA87M Beijing	14600	/images/VarmiloVA87MBeijingOpera.jpg	Varmilo VA87M Beijing Opera TKL Dye Sub PBT Mechanical Keyboard	This keyboard features the design Beijing Opera inspired by Peking Opera, a traditional and cultural form of art which combines music, vocal performance, mime, dance and acrobatics. Save space with the TKL form factor!  Genuine Cherry MX Red Switches - suited for gamers with a linear path and lightweight keys for rapid actuation.  Premium PBT keycaps using Dye Sublimation.  Follows the standard QWERTY ANSI layout.  Features full USB N-Key Rollover.  USB-C interface with 60 inch theme matching cable.
15	Vortex POK3R	11900	/images/VortexPOK3R.png	Vortex POK3R White Case 60% Double Shot PBT Mechanical Keyboard	Tiny sized ultra compact mechanical keyboard with 61 keys, without F Raw (functions buttons), without numpad.  Ideal for gamers and typist, office and home use.  The extra small form factor makes the Vortex Poker ideal for reduced spaces.  Includes 3 customizable layouts, thick PBT laser etched keycaps, and a robust metal frame.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 242, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 83, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 57, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 15, true);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

