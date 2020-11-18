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
2	21	3	2900
3	22	3	2900
4	23	3	2900
5	24	3	2900
6	25	3	2900
7	26	3	2900
8	27	3	2900
9	28	3	2900
10	29	3	2900
11	30	3	2900
12	31	4	999
13	32	5	9900
14	33	6	830
15	34	6	830
16	35	6	830
25	35	6	830
26	35	5	9900
27	35	4	999
28	35	3	2900
29	35	2	2595
30	35	1	2999
31	35	2	2595
32	35	3	2900
33	35	3	2900
34	35	3	2900
35	35	6	830
36	35	5	9900
37	35	5	9900
38	35	4	999
39	36	4	999
40	37	4	999
41	35	4	999
42	35	4	999
43	35	4	999
44	38	2	2595
45	38	2	2595
46	38	1	2999
47	38	3	2900
48	38	4	999
49	38	1	2999
50	35	3	2900
51	38	1	2999
52	38	1	2999
53	38	3	2900
54	38	3	2900
55	38	1	2999
56	38	1	2999
57	38	5	9900
58	38	5	9900
59	38	2	2595
60	38	1	2999
61	39	1	2999
62	39	2	2595
63	39	4	999
64	39	5	9900
65	40	1	2999
66	41	1	2999
67	41	2	2595
68	42	1	2999
69	43	3	2900
70	43	5	9900
71	43	1	2999
72	44	2	2595
73	45	2	2595
74	46	2	2595
75	47	2	2595
76	47	2	2595
77	43	1	2999
78	48	1	2999
79	48	2	2595
80	48	3	2900
81	48	3	2900
82	49	3	2900
83	49	1	2999
84	49	4	999
85	49	4	999
86	49	5	9900
87	49	6	830
88	50	7	7500
89	50	8	9999
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
6	2020-11-04 12:32:54.273576-08
7	2020-11-04 12:43:22.078304-08
8	2020-11-04 12:44:10.908744-08
9	2020-11-04 12:48:13.920267-08
10	2020-11-04 12:48:38.149324-08
11	2020-11-04 12:51:56.933026-08
12	2020-11-04 12:52:21.013102-08
13	2020-11-04 12:54:47.41124-08
14	2020-11-04 12:55:06.917593-08
15	2020-11-04 12:56:21.80185-08
16	2020-11-04 13:01:32.842388-08
17	2020-11-04 13:15:33.594607-08
18	2020-11-04 13:16:36.788897-08
19	2020-11-04 13:17:15.529232-08
20	2020-11-04 13:17:36.809305-08
21	2020-11-04 13:18:47.897609-08
22	2020-11-04 13:19:41.089606-08
23	2020-11-04 13:22:30.931727-08
24	2020-11-04 13:22:55.899136-08
25	2020-11-04 13:27:28.359147-08
26	2020-11-04 13:28:01.163541-08
27	2020-11-04 13:30:13.505906-08
28	2020-11-04 13:30:26.628743-08
29	2020-11-04 13:35:25.170564-08
30	2020-11-04 13:36:17.368671-08
31	2020-11-04 13:37:01.671725-08
32	2020-11-04 13:37:03.550667-08
33	2020-11-04 13:37:05.06257-08
34	2020-11-04 14:38:25.871225-08
35	2020-11-04 14:45:59.152591-08
36	2020-11-04 17:36:23.865765-08
37	2020-11-04 17:37:11.44264-08
38	2020-11-04 21:00:29.725061-08
39	2020-11-05 12:45:10.267597-08
40	2020-11-05 13:09:49.146622-08
41	2020-11-05 14:54:49.971037-08
42	2020-11-05 14:55:42.283498-08
43	2020-11-05 14:56:43.122631-08
44	2020-11-05 17:00:30.706192-08
45	2020-11-05 17:14:39.713728-08
46	2020-11-05 17:20:08.259684-08
47	2020-11-05 17:37:57.031413-08
48	2020-11-06 00:10:41.499203-08
49	2020-11-07 18:11:09.837608-08
50	2020-11-17 18:12:41.282689-08
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	44	keenan	1234567890	123 postgresql st	2020-11-05 17:03:58.913761-08
2	45	keenan	1234567890123456	123 postgresql st	2020-11-05 17:20:01.41573-08
3	46	keenan	1234567890123456	123 postgresql st	2020-11-05 17:37:51.926176-08
4	47	keenan	1234567890123456	123 postgresql st	2020-11-05 17:40:51.032774-08
6	43	keenan	1234123412341234	123 wicked st\nsuite 200\nirvine, ca 92620	2020-11-06 00:04:00.196057-08
7	48	keenan	1234123412341234	123 wicked st\nsuite 200\nirvine, ca 92620	2020-11-06 00:11:04.801638-08
8	49	melissa woo	1234123412341234	123 ragweed st\nSan Diego, ca	2020-11-07 18:12:12.059222-08
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

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 89, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 50, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 8, true);


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

