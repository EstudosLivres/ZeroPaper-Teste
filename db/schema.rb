# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20130902192649) do

  create_table "galinhas", force: true do |t|
    t.integer  "galinha_id"
    t.string   "nome"
    t.string   "raca"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "galinhas", ["galinha_id"], name: "index_galinhas_on_galinha_id", unique: true

  create_table "ovos", force: true do |t|
    t.integer  "ovo_id"
    t.integer  "galinha_id"
    t.boolean  "cor_branco"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ovos", ["ovo_id"], name: "index_ovos_on_ovo_id", unique: true

end